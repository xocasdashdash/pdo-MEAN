'use strict';
var mongoose = require('mongoose');
var proxyquire = require('proxyquire');
var PdoGroupService = {};
var q = require('q');
var ee = require(baseDir + '/app/events/emitter.js');
require(baseDir + '/app/models/models.js').initialize();
PdoGroupService = proxyquire(baseDir + '/app/services/pdo_group.js', {
    'mongoose': mongoose,
    '../app/events/emitter.js': ee
});
describe('Tests unitarios del servicio: PdoGroupService', function() {
    var sandbox;
    beforeEach(function(done) {
        sandbox = sinon.sandbox.create();
        done();
    });
    afterEach(function(done) {
        sandbox.restore();
        done();
    });
    it('should fail to create a pdo group when validatePdos rejects', function(done) {
        var newPdoGroup = {
            title: 'title del pdoGroup',
            summary: 'summary del pdoGroup',
            pdos: ['123456789012123456789012', '123456789012123456789013', '123456789012123456789012']
        };
        var validatePdosStub;
        validatePdosStub = sandbox.
        stub(PdoGroupService, 'validatePdos', function() {
            return q.reject();
        });
        PdoGroupService.
        createPdoGroup(newPdoGroup).
        should.be.rejected.
        and.notify(done);
    });
    it('should fail validatePdos when there\'s a mix of schools', function(done) {
        var invalidSchools = [{school: mongoose.Types.ObjectId('4edd40c86762e0fb12000003')},
            {school:mongoose.Types.ObjectId('4edd40c86762e0fb12000003')},
            {school:mongoose.Types.ObjectId('4edd40c86762e0fb12000004')}
        ];
        var mockFind = function(par1, par2, cb) {
            cb(null, invalidSchools);
        };
        mongoose.Model.find = sandbox.stub(mongoose.Model,'find',mockFind); //sinon.stub().returns(mockFind);
        PdoGroupService.validatePdos().
        should.be.rejected.and.notify(done);
        mongoose.Model.find.restore();
    });
    it('should validate correctly where there\'s only one school', function(done) {
        var validSchools = [{school: mongoose.Types.ObjectId('4edd40c86762e0fb12000003')},
            {school:mongoose.Types.ObjectId('4edd40c86762e0fb12000003')},
            {school:mongoose.Types.ObjectId('4edd40c86762e0fb12000003')},
            {school:mongoose.Types.ObjectId('4edd40c86762e0fb12000003')},
            {school:mongoose.Types.ObjectId('4edd40c86762e0fb12000003')}];
        var mockFind = function(par1, par2, cb) {
            cb(null, validSchools);
        };
        mongoose.Model.find = sandbox.stub(mongoose.Model,'find',mockFind); //sandbox.stub().returns(mockFind);
        
        //mongoose.Model.find = sinon.stub().returns(mockFind);
        PdoGroupService.validatePdos().
        should.be.fulfilled.and.notify(done);
    });
    it('should try to create a pdo group when validatePdos passes', function(done) {
        var newPdoGroup = {
            title: 'title del pdoGroup',
            summary: 'summary del pdoGroup',
            pdos: ['123456789012123456789012', '123456789012123456789013', '123456789012123456789012']
        };
        var mockSaveNewPdoGroup = function(defer) {
            defer.resolve();
        };
        var mockValidatePdos = function(){
            return q.resolve('OK');
        };
        var spySaveNewPdoGroup = sandbox.stub(PdoGroupService, 'saveNewPdoGroup', mockSaveNewPdoGroup);
        sandbox.stub(PdoGroupService,'validatePdos', mockValidatePdos);
        PdoGroupService.
        createPdoGroup(newPdoGroup).then(function() {
            spySaveNewPdoGroup.should.have.been.calledOnce;
            done();
        }).
        catch (function(reason) {
            done(reason);
        });
    });
    it('should fail to add an invalid comment', function(done) {
        var newPdoGroupComment = {
            title: '< than 10',
            text: faker.lorem.paragraphs
        };
        var pdoGroupFakeId = '123456789012123456789012';
        PdoGroupService.addCommentToPdoGroup(pdoGroupFakeId, newPdoGroupComment).
        should.be.rejected.and.notify(done);
    });
    it('should try to add a valid comment', function(done) {
        var newPdoGroupComment = {
            title: faker.lorem.sentence,
            text: faker.lorem.paragraphs
        };
        var pdoGroupFakeId = '123456789012123456789012';
        var mockSavePdoGroupComment = function(defer) {
            defer.resolve();
        };
        var spySavePdoGroupComment = sandbox.stub(PdoGroupService, 'savePdoGroupComment', mockSavePdoGroupComment);
        PdoGroupService.addCommentToPdoGroup(pdoGroupFakeId, newPdoGroupComment).
        then(function() {
            spySavePdoGroupComment.should.have.been.calledOnce;
            done();
        }).
        catch (function(reason) {
            done(reason);
        });
    });
});