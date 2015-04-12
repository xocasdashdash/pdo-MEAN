'use strict';
var mongoose = require('mongoose');
var proxyquire = require('proxyquire');
require(baseDir + '/app/models/models.js').initialize();
var ee = require(baseDir + '/app/events/emitter.js');
var PdoService = proxyquire(baseDir + '/app/services/pdo.js', {
    'mongoose': mongoose,
    '../app/events/emitter.js': ee
});
describe('Test unitarios del servicio: PdoService', function() {
    var sandbox;
    beforeEach(function(done) {
        sandbox = sinon.sandbox.create();
        done();
    });
    afterEach(function(done) {
        sandbox.restore();
        done();
    });
    it('should not add a comment when it\'s invalid', function(done) {
        var newPdoComment = {
            title: faker.lorem.sentence,
            text: ''
        };
        var fakePdoId = mongoose.Types.ObjectId('0123456789ab');
        PdoService.addCommentToPDo(fakePdoId, newPdoComment).
        should.be.rejected.and.notify(done);
    });
    it('should try to add a valid comment to a PDo', function(done) {
        var newPdoComment = {
            title: faker.lorem.sentences,
            text: faker.lorem.paragraphs
        };
        var FindByIdAndUpdate = function(par1, par2, cb) {
            cb(null, 'PDO');
        };
        var fakePdoId = mongoose.Types.ObjectId('0123456789ab');
        sandbox.stub(mongoose.Model, 'findByIdAndUpdate', FindByIdAndUpdate);
        PdoService.addCommentToPDo(fakePdoId, newPdoComment).
        should.be.fulfilled.and.
        eventually.equal('PDO').and.notify(done);
    });
});