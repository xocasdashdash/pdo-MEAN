/*
Los datos sacados de la web tienen dos duplicados (G500 y G550) asi que les he puesto un 1 al final para diferenciarlos y que no de problemas
*/
'use strict';

module.exports = {
    Users: [{
        "username": "joaquin.fernandez+superAdmin@uah.es",
        "email": "joaquin.fernandez+superAdmin@edu.uah.es",
        "password": "1234",
        "role": "ROLE_SUPER_ADMIN"
    },{
        "username": "joaquin.fernandez+schoolManager@uah.es",
        "email": "joaquin.fernandez+schoolManager@edu.uah.es",
        "password": "1234",
        "role": "ROLE_GESTOR"
    },{
        "username": "joaquin.fernandez+admin@uah.es",
        "email": "joaquin.fernandez+admin@edu.uah.es",
        "password": "1234",
        "role": "ROLE_ADMIN"
    }],
    Schools: [{
        "schoolname": "EPS",
        "url": "www.uah.es/politecnica",
        "email": "politecnica@uah.es",
        "school_codes": ["203", "210"]
    }, {
        "schoolname": "Medicina",
        "url": "www.uah.es/medicina",
        "email": "medicina@uah.es",
        "school_codes": ["101", "205", "201"]
    }, {
        "schoolname": "Ciencias",
        "url": "www.uah.es/ciencias",
        "email": "ciencias@uah.es",
        "school_codes": ["107", "102", "110"]
    }, {
        "schoolname": "Derecho",
        "url": "www.uah.es/derecho",
        "email": "derecho@uah.es",
        "school_codes": ["105"]
    }, {
        "schoolname": "CCSS",
        "url": "www.uah.es/ccss",
        "email": "ccss@uah.es",
        "school_codes": ["103", "208", "206"]
    }, {
        "schoolname": "Filosofía",
        "url": "www.uah.es/filosofia",
        "email": "filosofia@uah.es",
        "school_codes": ["106", "109"]
    }, {
        "schoolname": "Educación",
        "url": "www.uah.es/educacion",
        "email": "educacion@uah.es",
        "school_codes": ["202"]
    }, {
        "schoolname": "Arquitectura",
        "url": "www.uah.es/arquitectura",
        "email": "arquitectura@uah.es",
        "school_codes": ["209", "207"]
    }, {
        "schoolname": "Farmacia",
        "url": "www.uah.es/farmacia",
        "email": "farmacia@uah.es",
        "school_codes": ["104"]
    }, {
        "schoolname": "Escuela Cardenal Cisneros",
        "url": "www.uah.es/cisneros",
        "email": "cisneros@uah.es",
        "school_codes": ["204"]
    }],
    Programs: [{
        "name": "Grado en Derecho",
        "code": "G400",
        "school_code": "105",
        "school": "",
        "asignaturas": [{
            "name": "DERECHO CONSTITUCIONAL",
            "code": "400000"
        }, {
            "name": "DERECHO ROMANO",
            "code": "400001"
        }, {
            "name": "HISTORIA DEL DERECHO ESPAÑOL",
            "code": "400002"
        }, {
            "name": "INTRODUCCIÓN AL DERECHO CIVIL",
            "code": "400003"
        }, {
            "name": "DERECHO CIVIL I (OBLIGACIONES Y CONTRATOS)",
            "code": "400004"
        }, {
            "name": "DERECHO ECLESIÁSTICO DEL ESTADO",
            "code": "400005"
        }, {
            "name": "ECONOMÍA POLÍTICA Y HACIENDA PÚBLICA",
            "code": "400006"
        }, {
            "name": "FILOSOFÍA DEL DERECHO",
            "code": "400007"
        }, {
            "name": "DERECHO CIVIL II (DERECHOS REALES)",
            "code": "400008"
        }, {
            "name": "DERECHO INTERNACIONAL PUBLICO",
            "code": "400010"
        }, {
            "name": "DERECHO PROCESAL I",
            "code": "400011"
        }, {
            "name": "DERECHOS FUNDAMENTALES Y JUSTICIA CONSTITUCIONAL",
            "code": "400009"
        }, {
            "name": "DERECHO DE LA UNION EUROPEA",
            "code": "400012"
        }, {
            "name": "DERECHO MERCANTIL I",
            "code": "400013"
        }, {
            "name": "DERECHO PENAL I (PARTE GENERAL)",
            "code": "400014"
        }, {
            "name": "INTRODUCCION AL DERECHO ADMINISTRATIVO",
            "code": "400015"
        }, {
            "name": "DERECHO ADMINISTRATIVO",
            "code": "400016"
        }, {
            "name": "DERECHO DEL TRABAJO Y DE LA SEGURIDAD SOCIAL",
            "code": "400017"
        }, {
            "name": "DERECHO FINANCIERO Y TRIBUTARIO I (PARTE GENERAL)",
            "code": "400018"
        }, {
            "name": "DERECHO PENAL II (PARTE ESPECIAL)",
            "code": "400019"
        }, {
            "name": "DERECHO FINANCIERO Y TRIBUTARIO II (PARTE ESPECIAL)",
            "code": "400020"
        }, {
            "name": "DERECHO INTERNACIONAL PRIVADO",
            "code": "400021"
        }, {
            "name": "DERECHO MERCANTIL II",
            "code": "400022"
        }, {
            "name": "DERECHO PROCESAL II",
            "code": "400023"
        }, {
            "name": "DERECHO CIVIL III (DERECHO DE FAMILIA Y SUCESIONES)",
            "code": "400024"
        }, {
            "name": "PRÁCTICAS EXTERNAS",
            "code": "400025"
        }, {
            "name": "TRABAJO FIN DE GRADO",
            "code": "400026"
        }, {
            "name": "CRIMINOLOGÍA Y PENOLOGÍA",
            "code": "400052"
        }, {
            "name": "DERECHO DE LA PROPIEDAD INDUSTRIAL",
            "code": "400066"
        }, {
            "name": "DERECHO DE LA SEGURIDAD SOCIAL",
            "code": "400036"
        }, {
            "name": "DERECHO INMOBILIARIO",
            "code": "400032"
        }, {
            "name": "DERECHO INTERNACIONAL Y EUROPEO DE LOS DERECHOS HUMANOS",
            "code": "400041"
        }, {
            "name": "DERECHO PENITENCIARIO",
            "code": "400068"
        }, {
            "name": "DERECHO SINDICAL",
            "code": "400037"
        }, {
            "name": "EL PROCESO CIVIL EN ROMA",
            "code": "400062"
        }, {
            "name": "HISTORIA JURÍDICA DEL MOVIMIENTO EUROPEO",
            "code": "400042"
        }, {
            "name": "LA CONTRATACION EN EL DERECHO DEL CONSUMO",
            "code": "400033"
        }, {
            "name": "LA LIBERTAD RELIGIOSA EN EUROPA",
            "code": "400044"
        }, {
            "name": "MEDICINA LEGAL",
            "code": "400054"
        }, {
            "name": "NACIONALIDAD Y EXTRANJERIA",
            "code": "400039"
        }, {
            "name": "PROCEDIMIENTOS TRIBUTARIOS",
            "code": "400064"
        }, {
            "name": "SEMINARIO DE DERECHO PENAL DE LA EMPRESA",
            "code": "400051"
        }]
    }, {
        "name": "Grado en Contabilidad y Finanzas",
        "code": "G341",
        "school_code": "103",
        "school": "",
        "asignaturas": [{
            "name": "DERECHO DE LA EMPRESA",
            "code": "340002"
        }, {
            "name": "ECONOMÍA DE LA EMPRESA",
            "code": "340000"
        }, {
            "name": "MATEMÁTICAS EMPRESARIALES I",
            "code": "340001"
        }, {
            "name": "ECONOMÍA ESPAÑOLA Y MUNDIAL",
            "code": "340003"
        }, {
            "name": "ESTADÍSTICA EMPRESARIAL I",
            "code": "340006"
        }, {
            "name": "MATEMÁTICAS EMPRESARIALES II",
            "code": "340004"
        }, {
            "name": "TEORÍA ECONÓMICA",
            "code": "340005"
        }, {
            "name": "ANÁLISIS DE LAS OPERACIONES FINANCIERAS",
            "code": "340009"
        }, {
            "name": "DERECHO DE SOCIEDADES",
            "code": "340011"
        }, {
            "name": "ESTADÍSTICA EMPRESARIAL II",
            "code": "340007"
        }, {
            "name": "INTRODUCCIÓN A LA CONTABILIDAD",
            "code": "340008"
        }, {
            "name": "ORGANIZACIÓN Y RECURSOS HUMANOS",
            "code": "340010"
        }, {
            "name": "CONTABILIDAD FINANCIERA Y DE SOCIEDADES",
            "code": "340013"
        }, {
            "name": "MACROECONOMÍA",
            "code": "341001"
        }, {
            "name": "MARKETING:  FUNDAMENTOS",
            "code": "340012"
        }, {
            "name": "SISTEMA FINANCIERO ESPAÑOL",
            "code": "341000"
        }, {
            "name": "DECISIONES FINANCIERAS I",
            "code": "341002"
        }, {
            "name": "INFORMACIÓN FINANCIERA EMPRESARIAL",
            "code": "341007"
        }, {
            "name": "SISTEMA FISCAL ESPAÑOL",
            "code": "341004"
        }, {
            "name": "TEORÍA DE LOS MERCADOS FINANCIEROS",
            "code": "341005"
        }, {
            "name": "DECISIONES FINANCIERAS II",
            "code": "341006"
        }, {
            "name": "INGLÉS APLICADO A LAS FINANZAS",
            "code": "341003"
        }, {
            "name": "RÉGIMEN FISCAL DE LA EMPRESA",
            "code": "340020"
        }, {
            "name": "ANÁLISIS DE LA INFORMACIÓN EMPRESARIAL",
            "code": "341009"
        }, {
            "name": "TRABAJO FIN DE GRADO",
            "code": "341013"
        }, {
            "name": "TRABAJO FIN DE GRADO",
            "code": "341011"
        }, {
            "name": "PRÁCTICAS EXTERNAS",
            "code": "341008"
        }, {
            "name": "PRÁCTICAS EXTERNAS",
            "code": "341010"
        }, {
            "name": "ANÁLISIS DE SERIES TEMPORALES",
            "code": "360041"
        }, {
            "name": "CONTABILIDAD AVANZADA",
            "code": "340029"
        }, {
            "name": "CONTABILIDAD DE COSTES",
            "code": "340015"
        }, {
            "name": "DIRECCIÓN DE LA EMPRESA FINANCIERA",
            "code": "340042"
        }, {
            "name": "DIRECCIÓN DE RECURSOS HUMANOS EN LA EMPRESA",
            "code": "340049"
        }, {
            "name": "ECONOMETRÍA",
            "code": "361026"
        }, {
            "name": "ECONOMETRÍA APLICADA A LA TOMA DE DECISIONES EMPRESARIALES",
            "code": "340054"
        }, {
            "name": "EL EMPRENDIMIENTO: DE LA IDEA A LA REALIDAD",
            "code": "340065"
        }, {
            "name": "EXCEL PARA LAS FINANZAS",
            "code": "340062"
        }, {
            "name": "INTRODUCCIÓN AL SEGURO",
            "code": "340061"
        }, {
            "name": "MANAGEMENT INTERNACIONAL",
            "code": "340036"
        }, {
            "name": "PLANIFICACIÓN ESTRATÉGICA. COMPETITIVIDAD EN LA EMPRESA",
            "code": "340075"
        }, {
            "name": "POLÍTICA DE FORMACIÓN",
            "code": "340066"
        }, {
            "name": "TÉCNICAS DE AUDITORÍA DE CUENTAS",
            "code": "340059"
        }, {
            "name": "ANÁLISIS DE SERIES TEMPORALES",
            "code": "360041"
        }, {
            "name": "ANÁLISIS DEL ENTORNO ECONÓMICO EMPRESARIAL",
            "code": "340025"
        }, {
            "name": "CONSOLIDACIÓN CONTABLE",
            "code": "340072"
        }, {
            "name": "CONTABILIDAD DE COSTES",
            "code": "340015"
        }, {
            "name": "CONTABILIDAD DE GESTIÓN",
            "code": "340030"
        }, {
            "name": "CONTABILIDAD NACIONAL DE ESPAÑA",
            "code": "360030"
        }, {
            "name": "CONTABILIDAD PÚBLICA",
            "code": "340073"
        }, {
            "name": "CONTRATACIÓN LABORAL",
            "code": "340034"
        }, {
            "name": "DERECHO DEL MERCADO FINANCIERO",
            "code": "340046"
        }, {
            "name": "DIRECCIÓN DE LA EMPRESA FINANCIERA",
            "code": "340042"
        }, {
            "name": "DISEÑO Y DESARROLLO DE ENSAYOS EMPÍRICOS",
            "code": "360049"
        }, {
            "name": "ESTADÍSTICA PARA FINANZAS Y SEGUROS",
            "code": "340047"
        }, {
            "name": "ESTADÍSTICA PARA LA INVESTIGACIÓN DE MERCADOS",
            "code": "340028"
        }, {
            "name": "GESTIÓN DE RIESGOS FINANCIEROS",
            "code": "340044"
        }, {
            "name": "INTRODUCCIÓN A LA AUDITORÍA",
            "code": "340031"
        }, {
            "name": "MÉTODOS DE OPTIMIZACIÓN DE LA GESTIÓN EMPRESARIAL",
            "code": "340027"
        }, {
            "name": "MODELOS ECONOMÉTRICOS",
            "code": "361028"
        }, {
            "name": "POLÍTICA DE COMUNICACIÓN EN LA EMPRESA",
            "code": "340074"
        }, {
            "name": "TÉCNICAS APLICADAS A LA ECONOMÍA Y LOS NEGOCIOS INTERNACIONALES",
            "code": "361030"
        }]
    }, {
        "name": "Grado en Economía y Negocios Internacionales",
        "code": "G361",
        "school_code": "103",
        "school": "",
        "asignaturas": [{
            "name": "ECONOMÍA MUNDIAL",
            "code": "360001"
        }, {
            "name": "INTRODUCCIÓN A LA ECONOMÍA",
            "code": "360000"
        }, {
            "name": "INTRODUCCIÓN A LA ECONOMÍA DE LA EMPRESA",
            "code": "360003"
        }, {
            "name": "INTRODUCCIÓN AL DERECHO",
            "code": "360002"
        }, {
            "name": "ANÁLISIS MATEMÁTICO",
            "code": "360004"
        }, {
            "name": "ESTADÍSTICA ECONÓMICA I",
            "code": "360005"
        }, {
            "name": "SOCIOLOGÍA ECONÓMICA",
            "code": "360011"
        }, {
            "name": "DERECHO INTERNACIONAL ECONÓMICO",
            "code": "361000"
        }, {
            "name": "GESTIÓN INTERNACIONAL DE RECURSOS HUMANOS",
            "code": "361001"
        }, {
            "name": "INTRODUCCIÓN A LA CONTABILIDAD",
            "code": "340008"
        }, {
            "name": "MACROECONOMÍA I",
            "code": "360010"
        }, {
            "name": "MICROECONOMÍA I",
            "code": "360009"
        }, {
            "name": "CONTABILIDAD INTERNACIONAL",
            "code": "361004"
        }, {
            "name": "ECONOMÍA Y PROCESOS DE INTERNACIONALIZACIÓN",
            "code": "361002"
        }, {
            "name": "FISCALIDAD INTERNACIONAL",
            "code": "361003"
        }, {
            "name": "MACROECONOMÍA II",
            "code": "360015"
        }, {
            "name": "MICROECONOMÍA II",
            "code": "360014"
        }, {
            "name": "COMERCIO INTERNACIONAL Y GLOBALIZACIÓN I",
            "code": "361009"
        }, {
            "name": "ECONOMÍA DE LA UNIÓN EUROPEA",
            "code": "361005"
        }, {
            "name": "HISTORIA ECONÓMICA INTERNACIONAL DE LOS S.XIX Y XX",
            "code": "361008"
        }, {
            "name": "INSTITUCIONES Y MERCADOS FINANCIEROS",
            "code": "361007"
        }, {
            "name": "MACROECONOMÍA INTERNACIONAL I",
            "code": "361006"
        }, {
            "name": "COMERCIO INTERNACIONAL Y GLOBALIZACIÓN II",
            "code": "361013"
        }, {
            "name": "GESTIÓN INTERNACIONAL DE LA EMPRESA",
            "code": "361010"
        }, {
            "name": "MACROECONOMÍA INTERNACIONAL II",
            "code": "361011"
        }, {
            "name": "MARKETING INTERNACIONAL",
            "code": "361012"
        }, {
            "name": "ORGANISMOS ECONÓMICOS INTERNACIONALES",
            "code": "360024"
        }, {
            "name": "TRABAJO FIN DE GRADO",
            "code": "361016"
        }, {
            "name": "PRÁCTICAS EXTERNAS",
            "code": "361015"
        }, {
            "name": "ANÁLISIS DE LAS OPERACIONES FINANCIERAS",
            "code": "340009"
        }, {
            "name": "PRÁCTICAS EXTERNAS",
            "code": "361014"
        }, {
            "name": "ANÁLISIS DE SERIES TEMPORALES",
            "code": "360041"
        }, {
            "name": "ANÁLISIS ESTADÍSTICO DE DATOS",
            "code": "360043"
        }, {
            "name": "ANÁLISIS ESTADÍSTICO DINÁMICO",
            "code": "360040"
        }, {
            "name": "ÁREAS Y MERCADOS MUNDIALES",
            "code": "361023"
        }, {
            "name": "CONTABILIDAD AVANZADA",
            "code": "340029"
        }, {
            "name": "CONTABILIDAD DE COSTES",
            "code": "340015"
        }, {
            "name": "DECISIONES FINANCIERAS I",
            "code": "341002"
        }, {
            "name": "DERECHO DE SOCIEDADES",
            "code": "340011"
        }, {
            "name": "DINÁMICA ECONÓMICA",
            "code": "360032"
        }, {
            "name": "DIRECCIÓN DE RECURSOS HUMANOS EN LA EMPRESA",
            "code": "340049"
        }, {
            "name": "DIRECCIÓN ESTRATÉGICA EMPRESARIAL",
            "code": "340022"
        }, {
            "name": "DIRECCIÓN FINANCIERA I",
            "code": "340016"
        }, {
            "name": "ECONOMETRÍA",
            "code": "361026"
        }, {
            "name": "ECONOMÍA AMBIENTAL",
            "code": "360027"
        }, {
            "name": "ECONOMÍA DIGITAL",
            "code": "340069"
        }, {
            "name": "ECONOMÍA LABORAL",
            "code": "360028"
        }, {
            "name": "FUENTES ESTADÍSTICAS PARA LA ECONOMÍA",
            "code": "360042"
        }, {
            "name": "HISTORIA DEL COMERCIO",
            "code": "361021"
        }, {
            "name": "HISTORIA ECONÓMICA DE ESPAÑA",
            "code": "360038"
        }, {
            "name": "INFORMACIÓN FINANCIERA EMPRESARIAL",
            "code": "341007"
        }, {
            "name": "MARKETING: ESTRATEGIAS",
            "code": "340017"
        }, {
            "name": "OPERACIONES Y PROCESOS EMPRESARIALES",
            "code": "340014"
        }, {
            "name": "PLANIFICACIÓN ESTRATÉGICA. COMPETITIVIDAD EN LA EMPRESA",
            "code": "340075"
        }, {
            "name": "POLÍTICA DE FORMACIÓN",
            "code": "340066"
        }, {
            "name": "POLÍTICA ECONÓMICA ESPAÑOLA",
            "code": "360037"
        }, {
            "name": "POLÍTICA ECONÓMICA INTERNACIONAL",
            "code": "361024"
        }, {
            "name": "SISTEMA FISCAL ESPAÑOL",
            "code": "341004"
        }, {
            "name": "TÉCNICAS DE AUDITORÍA DE CUENTAS",
            "code": "340059"
        }, {
            "name": "TEORÍA DE JUEGOS",
            "code": "360031"
        }, {
            "name": "TEORÍA DE LOS MERCADOS FINANCIEROS",
            "code": "341005"
        }, {
            "name": "COMPRAS Y NEGOCIACIÓN",
            "code": "340058"
        }, {
            "name": "ANÁLISIS DE LA COYUNTURA ECONÓMICA",
            "code": "360033"
        }, {
            "name": "ANÁLISIS DE SERIES TEMPORALES",
            "code": "360041"
        }, {
            "name": "CONSOLIDACIÓN CONTABLE",
            "code": "340072"
        }, {
            "name": "CONTABILIDAD DE COSTES",
            "code": "340015"
        }, {
            "name": "CONTABILIDAD DE GESTIÓN",
            "code": "340030"
        }, {
            "name": "CONTABILIDAD FINANCIERA Y DE SOCIEDADES",
            "code": "340013"
        }, {
            "name": "CONTABILIDAD NACIONAL DE ESPAÑA",
            "code": "360030"
        }, {
            "name": "CONTABILIDAD PÚBLICA",
            "code": "340073"
        }, {
            "name": "CONTRATACIÓN LABORAL",
            "code": "340034"
        }, {
            "name": "CRECIMIENTO Y DESARROLLO",
            "code": "360045"
        }, {
            "name": "DECISIONES FINANCIERAS II",
            "code": "341006"
        }, {
            "name": "DERECHO DEL MERCADO FINANCIERO",
            "code": "340046"
        }, {
            "name": "DESARROLLO DE RECURSOS HUMANOS",
            "code": "340076"
        }, {
            "name": "DIRECCIÓN ESTRATÉGICA EMPRESARIAL",
            "code": "340022"
        }, {
            "name": "DIRECCIÓN FINANCIERA II",
            "code": "340019"
        }, {
            "name": "DISEÑO Y DESARROLLO DE ENSAYOS EMPÍRICOS",
            "code": "360049"
        }, {
            "name": "ECONOMÍA DEL BIENESTAR",
            "code": "360046"
        }, {
            "name": "EL PLAN DE NEGOCIO EN LA EMPRESA",
            "code": "340053"
        }, {
            "name": "ESTADOS FINANCIEROS",
            "code": "340018"
        }, {
            "name": "ESTRUCTURA SOCIAL DE ESPAÑA",
            "code": "360039"
        }, {
            "name": "HERRAMIENTAS PARA LA TOMA DE DECISIONES",
            "code": "361018"
        }, {
            "name": "INGLÉS APLICADO A LAS FINANZAS",
            "code": "341003"
        }, {
            "name": "INTRODUCCIÓN A LA AUDITORÍA",
            "code": "340031"
        }, {
            "name": "MACROECONOMÍA",
            "code": "341001"
        }, {
            "name": "MODELOS ECONOMÉTRICOS",
            "code": "361028"
        }, {
            "name": "POLÍTICA DE COMUNICACIÓN EN LA EMPRESA",
            "code": "340074"
        }, {
            "name": "POLÍTICA SOCIAL",
            "code": "360035"
        }, {
            "name": "RÉGIMEN FISCAL DE LA EMPRESA",
            "code": "340020"
        }, {
            "name": "TÉCNICAS APLICADAS A LA ECONOMÍA Y LOS NEGOCIOS INTERNACIONALES",
            "code": "361030"
        }]
    }, {
        "name": "Grado en Admón. y Dir. de Empresas",
        "code": "G340",
        "school_code": "103",
        "school": "",
        "asignaturas": [{
            "name": "DERECHO DE LA EMPRESA",
            "code": "340002"
        }, {
            "name": "ECONOMÍA DE LA EMPRESA",
            "code": "340000"
        }, {
            "name": "MATEMÁTICAS EMPRESARIALES I",
            "code": "340001"
        }, {
            "name": "ECONOMÍA ESPAÑOLA Y MUNDIAL",
            "code": "340003"
        }, {
            "name": "ESTADÍSTICA EMPRESARIAL I",
            "code": "340006"
        }, {
            "name": "MATEMÁTICAS EMPRESARIALES II",
            "code": "340004"
        }, {
            "name": "TEORÍA ECONÓMICA",
            "code": "340005"
        }, {
            "name": "ANÁLISIS DE LAS OPERACIONES FINANCIERAS",
            "code": "340009"
        }, {
            "name": "DERECHO DE SOCIEDADES",
            "code": "340011"
        }, {
            "name": "ESTADÍSTICA EMPRESARIAL II",
            "code": "340007"
        }, {
            "name": "INTRODUCCIÓN A LA CONTABILIDAD",
            "code": "340008"
        }, {
            "name": "OPERACIONES Y PROCESOS EMPRESARIALES",
            "code": "340014"
        }, {
            "name": "CONTABILIDAD FINANCIERA Y DE SOCIEDADES",
            "code": "340013"
        }, {
            "name": "MARKETING:  FUNDAMENTOS",
            "code": "340012"
        }, {
            "name": "ORGANIZACIÓN Y RECURSOS HUMANOS",
            "code": "340010"
        }, {
            "name": "CONTABILIDAD DE COSTES",
            "code": "340015"
        }, {
            "name": "DIRECCIÓN FINANCIERA I",
            "code": "340016"
        }, {
            "name": "MARKETING: ESTRATEGIAS",
            "code": "340017"
        }, {
            "name": "CONTABILIDAD DE COSTES",
            "code": "340015"
        }, {
            "name": "DIRECCIÓN FINANCIERA II",
            "code": "340019"
        }, {
            "name": "ESTADOS FINANCIEROS",
            "code": "340018"
        }, {
            "name": "RÉGIMEN FISCAL DE LA EMPRESA",
            "code": "340020"
        }, {
            "name": "DIRECCIÓN ESTRATÉGICA EMPRESARIAL",
            "code": "340022"
        }, {
            "name": "TRABAJO FIN DE GRADO",
            "code": "340024"
        }, {
            "name": "PRÁCTICAS EXTERNAS",
            "code": "340023"
        }, {
            "name": "ECONOMETRÍA I",
            "code": "360016"
        }, {
            "name": "ANÁLISIS DE SERIES TEMPORALES",
            "code": "360041"
        }, {
            "name": "COMERCIO INTERNACIONAL Y GLOBALIZACIÓN I",
            "code": "361009"
        }, {
            "name": "CONTABILIDAD AVANZADA",
            "code": "340029"
        }, {
            "name": "DERECHO INTERNACIONAL ECONÓMICO",
            "code": "361000"
        }, {
            "name": "DIRECCIÓN DE LA EMPRESA FINANCIERA",
            "code": "340042"
        }, {
            "name": "DIRECCIÓN DE RECURSOS HUMANOS EN LA EMPRESA",
            "code": "340049"
        }, {
            "name": "DISTRIBUCIÓN COMERCIAL",
            "code": "340070"
        }, {
            "name": "ECONOMETRÍA",
            "code": "361026"
        }, {
            "name": "ECONOMETRÍA APLICADA A LA TOMA DE DECISIONES EMPRESARIALES",
            "code": "340054"
        }, {
            "name": "ECONOMETRÍA I",
            "code": "360016"
        }, {
            "name": "ECONOMÍA DE LA UNIÓN EUROPEA",
            "code": "361005"
        }, {
            "name": "ECONOMÍA DIGITAL",
            "code": "340069"
        }, {
            "name": "ECONOMÍA INSTITUCIONAL",
            "code": "360023"
        }, {
            "name": "EL EMPRENDIMIENTO: DE LA IDEA A LA REALIDAD",
            "code": "340065"
        }, {
            "name": "EXCEL PARA LAS FINANZAS",
            "code": "340062"
        }, {
            "name": "GESTIÓN DE LA INNOVACIÓN",
            "code": "340052"
        }, {
            "name": "HISTORIA DEL COMERCIO",
            "code": "361021"
        }, {
            "name": "HISTORIA ECONÓMICA DE ESPAÑA",
            "code": "360038"
        }, {
            "name": "HISTORIA ECONÓMICA INTERNACIONAL DE LOS S.XIX Y XX",
            "code": "361008"
        }, {
            "name": "INSTITUCIONES Y MERCADOS FINANCIEROS",
            "code": "361007"
        }, {
            "name": "INTRODUCCIÓN AL SEGURO",
            "code": "340061"
        }, {
            "name": "INVESTIGACIÓN COMERCIAL",
            "code": "340055"
        }, {
            "name": "LIDERAZGO Y MANAGEMENT",
            "code": "340032"
        }, {
            "name": "MACROECONOMÍA I",
            "code": "360010"
        }, {
            "name": "MACROECONOMÍA INTERNACIONAL I",
            "code": "361006"
        }, {
            "name": "MANAGEMENT INTERNACIONAL",
            "code": "340036"
        }, {
            "name": "MARKETING DE SERVICIOS",
            "code": "340071"
        }, {
            "name": "MICROECONOMÍA I",
            "code": "360009"
        }, {
            "name": "OPTIMIZACIÓN PARA EL ANÁLISIS ECONÓMICO",
            "code": "360007"
        }, {
            "name": "PLANIFICACIÓN ESTRATÉGICA. COMPETITIVIDAD EN LA EMPRESA",
            "code": "340075"
        }, {
            "name": "POLÍTICA DE FORMACIÓN",
            "code": "340066"
        }, {
            "name": "POLÍTICA ECONÓMICA ESPAÑOLA",
            "code": "360037"
        }, {
            "name": "POLÍTICA ECONÓMICA: OBJETIVOS E INSTRUMENTOS",
            "code": "360017"
        }, {
            "name": "PRESENTACIONES EFICACES Y NEGOCIACIÓN",
            "code": "780035"
        }, {
            "name": "PUBLICIDAD Y RELACIONES PÚBLICAS",
            "code": "340039"
        }, {
            "name": "TÉCNICAS DE AUDITORÍA DE CUENTAS",
            "code": "340059"
        }, {
            "name": "COMPRAS Y NEGOCIACIÓN",
            "code": "340058"
        }, {
            "name": "ECONOMETRÍA II",
            "code": "360020"
        }, {
            "name": "ANÁLISIS DE SERIES TEMPORALES",
            "code": "360041"
        }, {
            "name": "ANÁLISIS DEL ENTORNO ECONÓMICO EMPRESARIAL",
            "code": "340025"
        }, {
            "name": "COMERCIO INTERNACIONAL Y GLOBALIZACIÓN II",
            "code": "361013"
        }, {
            "name": "CONSOLIDACIÓN CONTABLE",
            "code": "340072"
        }, {
            "name": "CONTABILIDAD DE GESTIÓN",
            "code": "340030"
        }, {
            "name": "CONTABILIDAD NACIONAL DE ESPAÑA",
            "code": "360030"
        }, {
            "name": "CONTABILIDAD PÚBLICA",
            "code": "340073"
        }, {
            "name": "CONTRATACIÓN LABORAL",
            "code": "340034"
        }, {
            "name": "DERECHO DEL MERCADO FINANCIERO",
            "code": "340046"
        }, {
            "name": "DESARROLLO DE RECURSOS HUMANOS",
            "code": "340076"
        }, {
            "name": "DIRECCIÓN DE LA EMPRESA FINANCIERA",
            "code": "340042"
        }, {
            "name": "DISEÑO Y DESARROLLO DE ENSAYOS EMPÍRICOS",
            "code": "360049"
        }, {
            "name": "ECONOMETRÍA I",
            "code": "360016"
        }, {
            "name": "ECONOMETRÍA II",
            "code": "360020"
        }, {
            "name": "EL LÍDER-COACH: CLAVES PARA EL DESARROLLO DE LAS HABILIDADES DE LIDERAZGO",
            "code": "580018"
        }, {
            "name": "EL PLAN DE NEGOCIO EN LA EMPRESA",
            "code": "340053"
        }, {
            "name": "ESTADÍSTICA PARA FINANZAS Y SEGUROS",
            "code": "340047"
        }, {
            "name": "ESTADÍSTICA PARA LA INVESTIGACIÓN DE MERCADOS",
            "code": "340028"
        }, {
            "name": "ESTRUCTURA SOCIAL DE ESPAÑA",
            "code": "360039"
        }, {
            "name": "FISCALIDAD INTERNACIONAL",
            "code": "361003"
        }, {
            "name": "GESTIÓN DE RIESGOS FINANCIEROS",
            "code": "340044"
        }, {
            "name": "GESTIÓN DEL CAMBIO Y CULTURA EMPRESARIAL",
            "code": "340048"
        }, {
            "name": "GESTIÓN INTERNACIONAL DE LA EMPRESA",
            "code": "361010"
        }, {
            "name": "HACIENDA PÚBLICA",
            "code": "360013"
        }, {
            "name": "HISTORIA DEL PENSAMIENTO ECONÓMICO",
            "code": "360022"
        }, {
            "name": "HISTORIA ECONÓMICA",
            "code": "360012"
        }, {
            "name": "INGLÉS APLICADO A LAS FINANZAS",
            "code": "341003"
        }, {
            "name": "INTRODUCCIÓN A LA AUDITORÍA",
            "code": "340031"
        }, {
            "name": "MACROECONOMÍA II",
            "code": "360015"
        }, {
            "name": "MACROECONOMÍA INTERNACIONAL II",
            "code": "361011"
        }, {
            "name": "MARKETING INTERNACIONAL",
            "code": "361012"
        }, {
            "name": "MÉTODOS DE OPTIMIZACIÓN DE LA GESTIÓN EMPRESARIAL",
            "code": "340027"
        }, {
            "name": "MICROECONOMÍA II",
            "code": "360014"
        }, {
            "name": "MODELOS ECONOMÉTRICOS",
            "code": "361028"
        }, {
            "name": "ORGANISMOS ECONÓMICOS INTERNACIONALES",
            "code": "360024"
        }, {
            "name": "POLÍTICA DE COMUNICACIÓN EN LA EMPRESA",
            "code": "340074"
        }, {
            "name": "POLÍTICAS ECONÓMICAS COMPARADAS",
            "code": "360021"
        }, {
            "name": "SOCIOLOGÍA DE LA EMPRESA",
            "code": "340026"
        }, {
            "name": "TÉCNICAS APLICADAS A LA ECONOMÍA Y LOS NEGOCIOS INTERNACIONALES",
            "code": "361030"
        }]
    }, {
        "name": "Grado en Economía",
        "code": "G360",
        "school_code": "103",
        "school": "",
        "asignaturas": [{
            "name": "ECONOMÍA MUNDIAL",
            "code": "360001"
        }, {
            "name": "INTRODUCCIÓN A LA ECONOMÍA",
            "code": "360000"
        }, {
            "name": "INTRODUCCIÓN A LA ECONOMÍA DE LA EMPRESA",
            "code": "360003"
        }, {
            "name": "INTRODUCCIÓN AL DERECHO",
            "code": "360002"
        }, {
            "name": "ANÁLISIS MATEMÁTICO",
            "code": "360004"
        }, {
            "name": "ECONOMÍA ESPAÑOLA",
            "code": "360006"
        }, {
            "name": "ESTADÍSTICA ECONÓMICA I",
            "code": "360005"
        }, {
            "name": "ESTADÍSTICA ECONÓMICA II",
            "code": "360008"
        }, {
            "name": "INTRODUCCIÓN A LA CONTABILIDAD",
            "code": "340008"
        }, {
            "name": "MACROECONOMÍA I",
            "code": "360010"
        }, {
            "name": "MICROECONOMÍA I",
            "code": "360009"
        }, {
            "name": "OPTIMIZACIÓN PARA EL ANÁLISIS ECONÓMICO",
            "code": "360007"
        }, {
            "name": "HACIENDA PÚBLICA",
            "code": "360013"
        }, {
            "name": "HISTORIA ECONÓMICA",
            "code": "360012"
        }, {
            "name": "MACROECONOMÍA II",
            "code": "360015"
        }, {
            "name": "MICROECONOMÍA II",
            "code": "360014"
        }, {
            "name": "SOCIOLOGÍA ECONÓMICA",
            "code": "360011"
        }, {
            "name": "ECONOMETRÍA I",
            "code": "360016"
        }, {
            "name": "ECONOMÍA INSTITUCIONAL",
            "code": "360023"
        }, {
            "name": "POLÍTICA ECONÓMICA: OBJETIVOS E INSTRUMENTOS",
            "code": "360017"
        }, {
            "name": "SISTEMA FISCAL ESPAÑOL",
            "code": "360018"
        }, {
            "name": "ECONOMETRÍA I",
            "code": "360016"
        }, {
            "name": "ECONOMETRÍA II",
            "code": "360020"
        }, {
            "name": "HISTORIA DEL PENSAMIENTO ECONÓMICO",
            "code": "360022"
        }, {
            "name": "ORGANISMOS ECONÓMICOS INTERNACIONALES",
            "code": "360024"
        }, {
            "name": "POLÍTICAS ECONÓMICAS COMPARADAS",
            "code": "360021"
        }, {
            "name": "TRABAJO FIN DE GRADO",
            "code": "360026"
        }, {
            "name": "PRÁCTICAS EXTERNAS",
            "code": "360019"
        }, {
            "name": "PRÁCTICAS EXTERNAS",
            "code": "360025"
        }, {
            "name": "ANÁLISIS DE LAS OPERACIONES FINANCIERAS",
            "code": "340009"
        }, {
            "name": "ANÁLISIS DE SERIES TEMPORALES",
            "code": "360041"
        }, {
            "name": "ANÁLISIS ESTADÍSTICO DE DATOS",
            "code": "360043"
        }, {
            "name": "ANÁLISIS ESTADÍSTICO DINÁMICO",
            "code": "360040"
        }, {
            "name": "COMERCIO INTERNACIONAL Y GLOBALIZACIÓN",
            "code": "360044"
        }, {
            "name": "CONTABILIDAD AVANZADA",
            "code": "340029"
        }, {
            "name": "CONTABILIDAD DE COSTES",
            "code": "340015"
        }, {
            "name": "DECISIONES FINANCIERAS I",
            "code": "341002"
        }, {
            "name": "DERECHO DE SOCIEDADES",
            "code": "340011"
        }, {
            "name": "DINÁMICA ECONÓMICA",
            "code": "360032"
        }, {
            "name": "DIRECCIÓN DE RECURSOS HUMANOS EN LA EMPRESA",
            "code": "340049"
        }, {
            "name": "DIRECCIÓN ESTRATÉGICA EMPRESARIAL",
            "code": "340022"
        }, {
            "name": "DIRECCIÓN FINANCIERA I",
            "code": "340016"
        }, {
            "name": "ECONOMÍA AMBIENTAL",
            "code": "360027"
        }, {
            "name": "ECONOMÍA LABORAL",
            "code": "360028"
        }, {
            "name": "FUENTES ESTADÍSTICAS PARA LA ECONOMÍA",
            "code": "360042"
        }, {
            "name": "HISTORIA DEL COMERCIO",
            "code": "361021"
        }, {
            "name": "HISTORIA ECONÓMICA DE ESPAÑA",
            "code": "360038"
        }, {
            "name": "INFORMACIÓN FINANCIERA EMPRESARIAL",
            "code": "341007"
        }, {
            "name": "MARKETING: ESTRATEGIAS",
            "code": "340017"
        }, {
            "name": "OPERACIONES Y PROCESOS EMPRESARIALES",
            "code": "340014"
        }, {
            "name": "ORGANIZACIÓN Y RECURSOS HUMANOS",
            "code": "340010"
        }, {
            "name": "PLANIFICACIÓN ESTRATÉGICA. COMPETITIVIDAD EN LA EMPRESA",
            "code": "340075"
        }, {
            "name": "POLÍTICA ECONÓMICA ESPAÑOLA",
            "code": "360037"
        }, {
            "name": "SISTEMA FISCAL ESPAÑOL",
            "code": "341004"
        }, {
            "name": "TÉCNICAS DE AUDITORÍA DE CUENTAS",
            "code": "340059"
        }, {
            "name": "TEORÍA DE JUEGOS",
            "code": "360031"
        }, {
            "name": "TEORÍA DE LOS MERCADOS FINANCIEROS",
            "code": "341005"
        }, {
            "name": "ANÁLISIS DE LA COYUNTURA ECONÓMICA",
            "code": "360033"
        }, {
            "name": "ANÁLISIS DE SERIES TEMPORALES",
            "code": "360041"
        }, {
            "name": "CONSOLIDACIÓN CONTABLE",
            "code": "340072"
        }, {
            "name": "CONTABILIDAD DE COSTES",
            "code": "340015"
        }, {
            "name": "CONTABILIDAD DE GESTIÓN",
            "code": "340030"
        }, {
            "name": "CONTABILIDAD FINANCIERA Y DE SOCIEDADES",
            "code": "340013"
        }, {
            "name": "CONTABILIDAD NACIONAL DE ESPAÑA",
            "code": "360030"
        }, {
            "name": "CONTABILIDAD PÚBLICA",
            "code": "340073"
        }, {
            "name": "CONTRATACIÓN LABORAL",
            "code": "340034"
        }, {
            "name": "CRECIMIENTO Y DESARROLLO",
            "code": "360045"
        }, {
            "name": "DECISIONES FINANCIERAS II",
            "code": "341006"
        }, {
            "name": "DERECHO DEL MERCADO FINANCIERO",
            "code": "340046"
        }, {
            "name": "DIRECCIÓN ESTRATÉGICA EMPRESARIAL",
            "code": "340022"
        }, {
            "name": "DIRECCIÓN FINANCIERA II",
            "code": "340019"
        }, {
            "name": "DISEÑO Y DESARROLLO DE ENSAYOS EMPÍRICOS",
            "code": "360049"
        }, {
            "name": "ECONOMÍA DEL BIENESTAR",
            "code": "360046"
        }, {
            "name": "ESTADOS FINANCIEROS",
            "code": "340018"
        }, {
            "name": "ESTRUCTURA SOCIAL DE ESPAÑA",
            "code": "360039"
        }, {
            "name": "FISCALIDAD INTERNACIONAL",
            "code": "361003"
        }, {
            "name": "HERRAMIENTAS PARA LA TOMA DE DECISIONES",
            "code": "361018"
        }, {
            "name": "INGLÉS APLICADO A LAS FINANZAS",
            "code": "341003"
        }, {
            "name": "INTRODUCCIÓN A LA AUDITORÍA",
            "code": "340031"
        }, {
            "name": "MACROECONOMÍA",
            "code": "341001"
        }, {
            "name": "MACROECONOMÍA INTERNACIONAL",
            "code": "360047"
        }, {
            "name": "ORGANIZACIÓN Y RECURSOS HUMANOS",
            "code": "340010"
        }, {
            "name": "POLÍTICA DE COMUNICACIÓN EN LA EMPRESA",
            "code": "340074"
        }, {
            "name": "POLÍTICA SOCIAL",
            "code": "360035"
        }, {
            "name": "RÉGIMEN FISCAL DE LA EMPRESA",
            "code": "340020"
        }, {
            "name": "SISTEMA FINANCIERO ESPAÑOL",
            "code": "341000"
        }]
    }, {
        "name": "Doble Grado en Derecho y A.D.E.",
        "code": "G401",
        "school_code": "105",
        "school": "",
        "asignaturas": []
    }, {
        "name": "Lic. Administración y Dirección de Empresas",
        "code": "340",
        "school_code": "103",
        "school": "",
        "asignaturas": [{
            "name": "RÉGIMEN FISCAL DE LA EMPRESA",
            "code": "34044"
        }, {
            "name": "ANÁLISIS DE ESTADOS FINANCIEROS",
            "code": "34204"
        }, {
            "name": "DIRECCIÓN FINANCIERA",
            "code": "34200"
        }, {
            "name": "ECONOMETRÍA (ECONOMETRÍA II)",
            "code": "34201"
        }, {
            "name": "ESTADOS FINANCIEROS",
            "code": "34202"
        }, {
            "name": "DIRECCIÓN COMERCIAL",
            "code": "34220"
        }, {
            "name": "DIRECCIÓN ESTRATÉGICA Y POLÍTICA DE EMPRESA",
            "code": "34221"
        }, {
            "name": "AUDITORÍA II",
            "code": "34302"
        }, {
            "name": "CONSOLIDACIÓN CONTABLE",
            "code": "34303"
        }, {
            "name": "DIRECCIÓN Y LIDERAZGO EN LA EMPRESA",
            "code": "34311"
        }, {
            "name": "DISTRIBUCIÓN COMERCIAL",
            "code": "34312"
        }, {
            "name": "MANAGEMENT INTERNACIONAL",
            "code": "34321"
        }, {
            "name": "MARKETING DE SERVICIOS",
            "code": "34322"
        }, {
            "name": "MÉTODOS ESTADÍSTICOS APLICADOS",
            "code": "34325"
        }, {
            "name": "PLANIFICACIÓN ESTRATÉGICA DE LA EMPRESA",
            "code": "34326"
        }, {
            "name": "POLÍTICA DE FORMACIÓN Y DE COMUNICACIÓN",
            "code": "34327"
        }, {
            "name": "PUBLICIDAD Y RELACIONES PÚBLICAS",
            "code": "34328"
        }, {
            "name": "RÉGIMEN FISCAL DE LA EMPRESA",
            "code": "34044"
        }, {
            "name": "SISTEMAS DE INFORMACIÓN DE LA EMPRESA",
            "code": "34331"
        }, {
            "name": "SISTEMAS DE INFORMACIÓN DE LOS RECURSOS HUMANOS",
            "code": "34332"
        }, {
            "name": "TÉCNICAS DE ASIGNACIÓN DE LOS RECURSOS HUMANOS",
            "code": "34334"
        }]
    }, {
        "name": "Lic. Ciencias Actuariales y Financieras ",
        "code": "350",
        "school_code": "103",
        "school": "",
        "asignaturas": [{
            "name": "MÉTODOS DE OPTIMIZACIÓN EN LA GESTIÓN EMPRESARIAL",
            "code": "35005"
        }, {
            "name": "DIRECCIÓN DE LA EMPRESA FINANCIERA Y DE SEGUROS",
            "code": "35027"
        }, {
            "name": "DIRECCIÓN FINANCIERA II",
            "code": "35022"
        }, {
            "name": "ECONOMÍA Y TÉCNICA DE LA SEGURIDAD SOCIAL",
            "code": "35023"
        }, {
            "name": "ESTADÍSTICA ACTUARIAL III",
            "code": "35024"
        }, {
            "name": "FINANCIACIÓN INTERNACIONAL",
            "code": "35028"
        }, {
            "name": "GESTIÓN DE EMPRESAS FINANCIERAS (CONTABILIDAD DE INSTITUCIONES FINANCIERAS Y  DE SEGUROS)",
            "code": "35026"
        }, {
            "name": "MATEMÁTICA ACTUARIAL II",
            "code": "35020"
        }, {
            "name": "MATEMÁTICA DE LOS SEGUROS GENERALES",
            "code": "35021"
        }, {
            "name": "TEORÍA DE LOS MERCADOS FINANCIEROS",
            "code": "35025"
        }, {
            "name": "APLICACIONES ACTUARIALES",
            "code": "35101"
        }, {
            "name": "AUDITORÍA II",
            "code": "34302"
        }, {
            "name": "MANAGEMENT INTERNACIONAL",
            "code": "34321"
        }, {
            "name": "PLANES Y FONDOS DE PENSIONES Y OTRAS FORMAS DE PREVISIÓN SOCIAL COMPLEMENTARIA",
            "code": "35110"
        }, {
            "name": "TÉCNICAS DE PREDICCIÓN ECONÓMICA A CORTO Y MEDIO PLAZO",
            "code": "35114"
        }]
    }, {
        "name": "Licenciatura en Economía",
        "code": "360",
        "school_code": "103",
        "school": "",
        "asignaturas": [{
            "name": "ESTADÍSTICA ECONÓMICA II",
            "code": "36020"
        }, {
            "name": "ECONOMETRÍA I",
            "code": "36201"
        }, {
            "name": "ECONOMETRÍA II",
            "code": "36205"
        }, {
            "name": "ECONOMÍA DEL SECTOR PÚBLICO (HACIENDA PÚBLICA ESPAÑOLA)",
            "code": "36200"
        }, {
            "name": "POLÍTICA ECONÓMICA COMPARADA I",
            "code": "36204"
        }, {
            "name": "ECONOMÍA DE LA EMPRESA I",
            "code": "36220"
        }, {
            "name": "ECONOMÍA DE LA EMPRESA II",
            "code": "36221"
        }, {
            "name": "DEMOGRAFÍA",
            "code": "36305"
        }, {
            "name": "DERECHOS Y LIBERTADES ECONÓMICAS EN LA UNIÓN EUROPEA",
            "code": "36309"
        }, {
            "name": "DESARROLLO ECONÓMICO",
            "code": "36310"
        }, {
            "name": "ECONOMETRÍA APLICADA AL ESTUDIO DE CASOS",
            "code": "36312"
        }, {
            "name": "ECONOMETRÍA SUPERIOR",
            "code": "36313"
        }, {
            "name": "ECONOMÍA AMBIENTAL",
            "code": "36314"
        }, {
            "name": "ECONOMÍA DE LA COMUNIDAD EUROPEA",
            "code": "36315"
        }, {
            "name": "ECONOMÍA LABORAL",
            "code": "36316"
        }, {
            "name": "ECONOMÍA MATEMÁTICA",
            "code": "36317"
        }, {
            "name": "ECONOMÍA Y POLÍTICA DE SERVICIOS",
            "code": "36319"
        }, {
            "name": "HISTORIA DEL PENSAMIENTO ECONÓMICO",
            "code": "36328"
        }, {
            "name": "HISTORIA ECONÓMICA INTERNACIONAL DE LOS SIGLOS XIX Y XX",
            "code": "36330"
        }, {
            "name": "INSTITUCIONES DE DERECHO PATRIMONIAL",
            "code": "36331"
        }, {
            "name": "INTRODUCCIÓN A LOS PROCESOS ESTOCÁSTICOS",
            "code": "34319"
        }, {
            "name": "LA INTERNACIONALIZACIÓN DE LOS FLUJOS DE CAPITAL",
            "code": "36336"
        }, {
            "name": "MACROECONOMÍA INTERNACIONAL",
            "code": "36339"
        }, {
            "name": "ORGANIZACIÓN ECONÓMICA INTERNACIONAL II",
            "code": "36342"
        }, {
            "name": "POLÍTICA ECONÓMICA COMPARADA II",
            "code": "36344"
        }, {
            "name": "POLÍTICA ECONÓMICA ESPAÑOLA",
            "code": "36345"
        }, {
            "name": "TÉCNICAS DEL COMERCIO EXTERIOR",
            "code": "36356"
        }, {
            "name": "TEORÍA DE LA HACIENDA PÚBLICA",
            "code": "36357"
        }, {
            "name": "TEORÍA DEL COMERCIO INTERNACIONAL",
            "code": "36358"
        }]
    }, {
        "name": "Doble Grado en Humanidades y Magisterio de Educación Primaria",
        "code": "G470",
        "school_code": "106",
        "school": "",
        "asignaturas": [{
            "name": "DIDÁCTICA",
            "code": "470002"
        }, {
            "name": "HISTORIA DEL ARTE ANTIGUO Y MEDIEVAL",
            "code": "252000"
        }, {
            "name": "PREHISTORIA Y ARQUEOLOGÍA",
            "code": "252001"
        }, {
            "name": "PROCESOS DE APRENDIZAJE Y DESARROLLO DE LAS HABILIDADES COMUNICATIVAS",
            "code": "470000"
        }, {
            "name": "SOCIOLOGÍA DE LA EDUCACIÓN",
            "code": "470001"
        }, {
            "name": "GEOGRAFÍA HUMANA",
            "code": "252007"
        }, {
            "name": "IDIOMA MODERNO I: ALEMÁN",
            "code": "790005"
        }, {
            "name": "IDIOMA MODERNO I: ÁRABE",
            "code": "252004"
        }, {
            "name": "IDIOMA MODERNO I: INGLÉS",
            "code": "790007"
        }, {
            "name": "ORGANIZACIÓN DE LAS INSTITUCIONES EDUCATIVAS",
            "code": "470004"
        }, {
            "name": "ORÍGENES DE EUROPA (SIGLOS VIII a.C.- S. XV d.C.)",
            "code": "252006"
        }, {
            "name": "PSICOLOGÍA DEL DESARROLLO",
            "code": "470003"
        }]
    }, {
        "name": "Grado en Lenguas Modernas y Traducción",
        "code": "G791",
        "school_code": "106",
        "school": "",
        "asignaturas": [{
            "name": "ALEMÁN I",
            "code": "251000"
        }, {
            "name": "FRANCÉS I",
            "code": "251001"
        }, {
            "name": "HISTORIA DE LOS PAÍSES DE HABLA INGLESA",
            "code": "251002"
        }, {
            "name": "INGLÉS I",
            "code": "251003"
        }, {
            "name": "LENGUA ESPAÑOLA",
            "code": "251004"
        }, {
            "name": "ALEMÁN II",
            "code": "251006"
        }, {
            "name": "ANÁLISIS LITERARIO DE TEXTOS EN LENGUA INGLESA",
            "code": "251005"
        }, {
            "name": "FRANCÉS II",
            "code": "251007"
        }, {
            "name": "INGLÉS ACADÉMICO",
            "code": "251008"
        }, {
            "name": "INGLÉS II",
            "code": "251009"
        }, {
            "name": "ALEMÁN III",
            "code": "251010"
        }, {
            "name": "FRANCÉS III",
            "code": "251011"
        }, {
            "name": "INGLÉS III",
            "code": "251012"
        }, {
            "name": "INTRODUCCIÓN A LA TRADUCCIÓN (INGLÉS-ESPAÑOL)",
            "code": "251013"
        }, {
            "name": "LINGÜÍSTICA",
            "code": "251014"
        }, {
            "name": "ALEMÁN IV",
            "code": "791000"
        }, {
            "name": "CULTURAS Y CIVILIZACIONES DE LOS PAÍSES DE HABLA INGLESA",
            "code": "251015"
        }, {
            "name": "FRANCÉS IV",
            "code": "791001"
        }, {
            "name": "INGLÉS IV",
            "code": "251017"
        }, {
            "name": "FUNDAMENTOS DE LA TRADUCCIÓN",
            "code": "791002"
        }, {
            "name": "LENGUA ESPAÑOLA APLICADA A LA TRADUCCIÓN",
            "code": "791003"
        }, {
            "name": "TERMINOLOGÍA APLICADA A LA TRADUCCIÓN",
            "code": "791004"
        }, {
            "name": "TRADUCCIÓN ESPECIALIZADA (CIENTÍFICO-TÉCNICA)",
            "code": "791005"
        }, {
            "name": "GESTIÓN DE PROYECTOS DE TRADUCCIÓN",
            "code": "791008"
        }, {
            "name": "HERRAMIENTAS INFORMÁTICAS APLICADAS A LA TRADUCCIÓN",
            "code": "791006"
        }, {
            "name": "TRADUCCIÓN ESPECIALIZADA (JURÍDICO-ECONÓMICA)",
            "code": "791007"
        }, {
            "name": "PRÁCTICAS EXTERNAS",
            "code": "791009"
        }, {
            "name": "TRABAJO FIN DE GRADO",
            "code": "791010"
        }, {
            "name": "TRADUCCIÓN ESPECIALIZADA ALEMÁN/ESPAÑOL",
            "code": "440034"
        }, {
            "name": "TRADUCCIÓN ESPECIALIZADA ALEMÁN/ESPAÑOL",
            "code": "791021"
        }, {
            "name": "TRADUCCIÓN ESPECIALIZADA FRANCÉS/ESPAÑOL: CAMPOS Y HERRAMIENTAS",
            "code": "791020"
        }, {
            "name": "TRADUCCIÓN ESPECIALIZADA FRANCÉS/ESPAÑOL: CAMPOS Y HERRAMIENTAS",
            "code": "440035"
        }, {
            "name": "APROXIMACIÓN A LA TRADUCCIÓN LITERARIA",
            "code": "440032"
        }, {
            "name": "ARGUMENTACIÓN Y PERSUASIÓN EN INGLÉS",
            "code": "251050"
        }, {
            "name": "BILINGÜISMO",
            "code": "251049"
        }, {
            "name": "GÉNERO, RAZA Y NATURALEZA EN LA LITERATURA CONTEMPORÁNEA EN LENGUA INGLESA",
            "code": "251040"
        }, {
            "name": "HERRAMIENTAS COMPUTACIONALES APLICADAS A LA INVESTIGACIÓN LINGÜÍSTICA",
            "code": "251043"
        }, {
            "name": "INTRODUCCIÓN A LA INTERPRETACIÓN",
            "code": "440031"
        }, {
            "name": "LITERATURA MEDIEVAL INGLESA",
            "code": "251048"
        }, {
            "name": "LITERATURA POSTCOLONIAL EN LENGUA INGLESA",
            "code": "251041"
        }, {
            "name": "LOCALIZACIÓN, TECNOLOGÍA Y TRADUCCIÓN",
            "code": "791016"
        }, {
            "name": "PRAGMÁTICA DE LA LENGUA INGLESA",
            "code": "251042"
        }, {
            "name": "TEORÍA E HISTORIA DEL TEATRO EN LENGUA INGLESA",
            "code": "251024"
        }, {
            "name": "TRADUCCIÓN AUDIOVISUAL",
            "code": "791015"
        }, {
            "name": "TRADUCCIÓN INSTITUCIONAL",
            "code": "440033"
        }, {
            "name": "TRADUCCIÓN LITERARIA, EDICIÓN Y CORRECCIÓN DE TEXTOS",
            "code": "791014"
        }, {
            "name": "TRADUCCIÓN GENERAL ALEMÁN-ESPAÑOL",
            "code": "791012"
        }, {
            "name": "SOCIOLINGÜISTICA DEL INGLÉS",
            "code": "251034"
        }, {
            "name": "TRADUCCIÓN GENERAL FRANCÉS-ESPAÑOL",
            "code": "791011"
        }, {
            "name": "DIDÁCTICA DEL INGLÉS COMO LENGUA EXTRANJERA Y SUS APLICACIONES INFORMÁTICAS",
            "code": "251051"
        }, {
            "name": "GRANDES OBRAS DE LA LITERATURA EN LENGUA INGLESA",
            "code": "251016"
        }, {
            "name": "LA MALDAD EN EL ANÁLISIS DE LA FICCIÓN",
            "code": "251046"
        }, {
            "name": "LA TRADUCCIÓN DE ASPECTOS PRAGMÁTICO-DISCURSIVOS",
            "code": "791022"
        }, {
            "name": "LINGÜÍSTICA COGNITIVA",
            "code": "251047"
        }, {
            "name": "POESÍA NORTEAMERICANA CONTEMPORÁNEA",
            "code": "251045"
        }, {
            "name": "SÁTIRA LITERARIA EN LENGUA INGLESA",
            "code": "251044"
        }, {
            "name": "TRADUCCIÓN EN LOS MEDIOS DE COMUNICACIÓN",
            "code": "440028"
        }, {
            "name": "TRADUCCIÓN GENERAL ALEMÁN-ESPAÑOL",
            "code": "440030"
        }, {
            "name": "TRADUCCIÓN GENERAL E INTERCULTURALIDAD FRANCÉS-ESPAÑOL",
            "code": "440029"
        }]
    }, {
        "name": "Grado en Estudios Hispánicos",
        "code": "G790",
        "school_code": "106",
        "school": "",
        "asignaturas": [{
            "name": "GRIEGO I",
            "code": "790002"
        }, {
            "name": "IDIOMA MODERNO I: ÁRABE",
            "code": "252004"
        }, {
            "name": "IDIOMA MODERNO I: FRANCÉS",
            "code": "790006"
        }, {
            "name": "IDIOMA MODERNO I: INGLÉS",
            "code": "790007"
        }, {
            "name": "INTRODUCCIÓN A LA GRAMÁTICA DEL ESPAÑOL",
            "code": "790004"
        }, {
            "name": "INTRODUCCIÓN A LA LINGÜÍSTICA",
            "code": "790000"
        }, {
            "name": "LATÍN I",
            "code": "790001"
        }, {
            "name": "LITERATURAS HISPÁNICAS MEDIEVALES",
            "code": "790003"
        }, {
            "name": "FONÉTICA Y FONOLOGÍA DEL ESPAÑOL",
            "code": "790011"
        }, {
            "name": "GRIEGO II",
            "code": "790013"
        }, {
            "name": "IDIOMA MODERNO I: ALEMÁN",
            "code": "790005"
        }, {
            "name": "IDIOMA MODERNO II: ALEMÁN",
            "code": "790016"
        }, {
            "name": "IDIOMA MODERNO II: ÁRABE",
            "code": "252010"
        }, {
            "name": "IDIOMA MODERNO II: FRANCÉS",
            "code": "790017"
        }, {
            "name": "IDIOMA MODERNO II: INGLÉS",
            "code": "790018"
        }, {
            "name": "LAS DISCIPLINAS LINGÜÍSTICAS",
            "code": "790014"
        }, {
            "name": "LATÍN II",
            "code": "790012"
        }, {
            "name": "NARRATIVA DE LOS SIGLOS DE ORO",
            "code": "790015"
        }, {
            "name": "EL LENGUAJE LITERARIO. POESÍA",
            "code": "790025"
        }, {
            "name": "HISTORIA DEL ESPAÑOL: FONÉTICA Y FONOLOGÍA",
            "code": "790024"
        }, {
            "name": "MORFOLOGÍA DEL ESPAÑOL",
            "code": "790022"
        }, {
            "name": "POESÍA Y TEATRO DE LOS SIGLOS DE ORO",
            "code": "790023"
        }, {
            "name": "EL LENGUAJE LITERARIO. PROSA",
            "code": "790029"
        }, {
            "name": "LITERATURA ESPAÑOLA DE LOS SIGLOS XVIII Y XIX",
            "code": "790027"
        }, {
            "name": "SINTAXIS DEL ESPAÑOL",
            "code": "790026"
        }, {
            "name": "VARIEDADES DEL ESPAÑOL",
            "code": "790028"
        }, {
            "name": "HISTORIA DEL ESPAÑOL. MORFOLOGÍA Y SINTAXIS",
            "code": "790032"
        }, {
            "name": "LITERATURA HISPANOAMERICANA",
            "code": "790033"
        }, {
            "name": "NARRATIVA ESPAÑOLA DEL SIGLO XX",
            "code": "790031"
        }, {
            "name": "SEMÁNTICA Y LEXICOLOGÍA",
            "code": "790030"
        }, {
            "name": "ANÁLISIS Y COMENTARIO DE TEXTOS LITERARIOS",
            "code": "790035"
        }, {
            "name": "ANÁLISIS Y COMENTARIO LINGÚÍSTICO DE TEXTOS",
            "code": "790034"
        }, {
            "name": "POESÍA Y TEATRO ESPAÑOLES DEL SIGLO XX",
            "code": "790036"
        }, {
            "name": "TRABAJO FIN DE GRADO",
            "code": "790038"
        }, {
            "name": "PRÁCTICAS EXTERNAS",
            "code": "790037"
        }, {
            "name": "HISTORIA DE LAS PALABRAS DEL ESPAÑOL",
            "code": "790056"
        }, {
            "name": "LAS LENGUAS DE ESPAÑA",
            "code": "790065"
        }, {
            "name": "LINGÜÍSTICA APLICADA",
            "code": "790050"
        }, {
            "name": "MITOLOGÍA GRECOLATINA Y LITERATURA ESPAÑOLA",
            "code": "790045"
        }, {
            "name": "OBRAS MAESTRAS DE LA LITERATURA GRECOLATINA CLÁSICA",
            "code": "790043"
        }, {
            "name": "PALEOGRAFÍA Y CRÍTICA TEXTUAL",
            "code": "790060"
        }, {
            "name": "POLÍTICAS LINGÜÍSTICAS",
            "code": "790067"
        }, {
            "name": "PRÁCTICA TEATRAL",
            "code": "790057"
        }, {
            "name": "SOCIOLINGÜISTICA",
            "code": "790046"
        }, {
            "name": "ANÁLISIS DEL DISCURSO Y DE LA CONVERSACIÓN",
            "code": "790049"
        }, {
            "name": "CERVANTES",
            "code": "790062"
        }, {
            "name": "CRÍTICA LITERARIA",
            "code": "790068"
        }, {
            "name": "EDICIÓN E INTERPRETACIÓN INTERTEXTUALES",
            "code": "790064"
        }, {
            "name": "EL SIGLO XV: LOS ORÍGENES DEL RENACIMIENTO",
            "code": "790061"
        }, {
            "name": "LENGUAS DE EUROPA",
            "code": "790055"
        }, {
            "name": "LITERATURA COMPARADA",
            "code": "790052"
        }, {
            "name": "PRODUCCIÓN LITERARIA Y MEDIOS DE COMUNICACIÓN",
            "code": "790059"
        }]
    }, {
        "name": "Grado en Historia",
        "code": "G250",
        "school_code": "106",
        "school": "",
        "asignaturas": [{
            "name": "HISTORIA DE LA ANTIGÜEDAD I",
            "code": "250004"
        }, {
            "name": "HISTORIA DEL PENSAMIENTO POLÍTICO",
            "code": "250003"
        }, {
            "name": "HISTORIA SOCIAL DE LA CULTURA ESCRITA",
            "code": "250002"
        }, {
            "name": "LOS ORÍGENES DE LA HUMANIDAD",
            "code": "250000"
        }, {
            "name": "PREHISTORIA DE LAS SOCIEDADES AMERINDIAS",
            "code": "250001"
        }, {
            "name": "ARQUEOLOGÍA",
            "code": "250005"
        }, {
            "name": "HISTORIA DE EUROPA EN LA EDAD MODERNA",
            "code": "250007"
        }, {
            "name": "HISTORIA UNIVERSAL CONTEMPORÁNEA",
            "code": "250008"
        }, {
            "name": "ORÍGENES DE EUROPA  EN LA EDAD MEDIA",
            "code": "250006"
        }, {
            "name": "GRAFÍAS PREHISTÓRICAS",
            "code": "250010"
        }, {
            "name": "HISTORIA DE LA ANTIGÜEDAD II",
            "code": "250011"
        }, {
            "name": "HISTORIA DEL ARTE ANTIGUO Y MEDIEVAL",
            "code": "252000"
        }, {
            "name": "HISTORIA MODERNA DE AMÉRICA",
            "code": "250012"
        }, {
            "name": "PRIMEROS AGRICULTORES Y METALÚRGICOS",
            "code": "250009"
        }, {
            "name": "HISTORIA DE ESPAÑA CONTEMPORÁNEA (S. XIX Y XX)",
            "code": "250014"
        }, {
            "name": "HISTORIA DE LA MONARQUÍA ESPAÑOLA (S. XV-XIX)",
            "code": "250013"
        }, {
            "name": "HISTORIA DEL ARTE MODERNO Y CONTEMPORÁNEO",
            "code": "250015"
        }, {
            "name": "LA FORMACIÓN DE LAS SOCIEDADES HISPÁNICAS (SIGLOS V-XV)",
            "code": "250016"
        }, {
            "name": "HISTORIA CULTURAL DE LA EDAD MEDIA",
            "code": "250020"
        }, {
            "name": "HISTORIA DE LA ESPAÑA ANTIGUA",
            "code": "250018"
        }, {
            "name": "HISTORIA DEL PENSAMIENTO CONTEMPORÁNEO",
            "code": "250024"
        }, {
            "name": "INTRODUCCIÓN AL ESTUDIO DE LOS TESTIMONIOS ESCRITOS",
            "code": "250019"
        }, {
            "name": "SOCIEDAD Y ECONOMÍA DE LA EUROPA MODERNA",
            "code": "250017"
        }, {
            "name": "EL MUNDO ACTUAL",
            "code": "250022"
        }, {
            "name": "ESPAÑA ACTUAL",
            "code": "250023"
        }, {
            "name": "HISTORIA CONTEMPORÁNEA DE AMÉRICA",
            "code": "250021"
        }, {
            "name": "HISTORIA DEL PENSAMIENTO CONTEMPORÁNEO",
            "code": "250024"
        }, {
            "name": "TRABAJO FIN DE GRADO",
            "code": "250026"
        }, {
            "name": "PRÁCTICAS EXTERNAS",
            "code": "250025"
        }, {
            "name": "ALEJANDRO MAGNO Y SU MUNDO",
            "code": "250076"
        }, {
            "name": "AMÉRICA LATINA ACTUAL, HERENCIAS DEL PASADO Y RETOS DEL FUTURO",
            "code": "250057"
        }, {
            "name": "ARQUEOLOGÍA MEDIEVAL",
            "code": "250032"
        }, {
            "name": "EL CATOLICISMO EN EL SIGLO XX",
            "code": "250056"
        }, {
            "name": "EL MEDITERRÁNEO EN LA ANTIGÜEDAD: UNA ENCRUCIJADA DE CULTURAS",
            "code": "250066"
        }, {
            "name": "HISTORIA DE LA UNIVERSIDAD DE ALCALÁ EN LA EDAD MEDIA Y EL RENACIMIENTO (SS.XIII-XVI)",
            "code": "250075"
        }, {
            "name": "HISTORIA MILITAR CONTEMPORÁNEA",
            "code": "250073"
        }, {
            "name": "HUMANISMO, BARROCO E ILUSTRACIÓN",
            "code": "250068"
        }, {
            "name": "IGLESIAS, CONFESIONALIDAD Y DISIDENCIAS",
            "code": "250047"
        }, {
            "name": "IMPERIOS, MONARQUÍAS, REINOS Y NACIONES",
            "code": "250043"
        }, {
            "name": "LAS GUERRAS MUNDIALES EN EL SIGLO XX",
            "code": "250059"
        }, {
            "name": "LAS MUJERES EN LA EUROPA MEDIEVAL",
            "code": "250060"
        }, {
            "name": "PALEOGRAFÍA (SS. XIII-XVII)",
            "code": "250064"
        }, {
            "name": "PRÁCTICAS EXTERNAS",
            "code": "250025"
        }, {
            "name": "TÁCTICA Y ORGANIZACIÓN MILITAR EN EL MUNDO ANTIGUO",
            "code": "250077"
        }, {
            "name": "ARTE Y SOCIEDAD DEL BARROCO",
            "code": "250045"
        }, {
            "name": "EL MUNDO PROTOBIZANTINO (SS. IV-VIII)",
            "code": "250067"
        }, {
            "name": "ESCRITURAS EXPUESTAS: INSCRIPCIONES Y GRAFFITI",
            "code": "250072"
        }, {
            "name": "FORMACIÓN DE LOS ESTADOS MULTIÉTNICOS EN AMÉRICA LATINA",
            "code": "250049"
        }, {
            "name": "GESTIÓN DE PATRIMONIO ARQUEOLÓGICO",
            "code": "250028"
        }, {
            "name": "HISTORIA DEL PENSAMIENTO ESPAÑOL",
            "code": "250063"
        }, {
            "name": "HISTORIA DEL PENSAMIENTO MODERNO",
            "code": "250046"
        }, {
            "name": "HUMANISMO Y RENACIMIENTO ARTÍSTICO EN ESPAÑA",
            "code": "250048"
        }, {
            "name": "INSTITUCIONES DEL IMPERIO ROMANO",
            "code": "250071"
        }, {
            "name": "ISLAM Y SOCIEDAD",
            "code": "250074"
        }, {
            "name": "MIGRACIONES Y PUEBLOS ROMANO-GERMÁNICOS",
            "code": "250040"
        }, {
            "name": "TECNOLOGÍA Y TIPOLOGÍA PREHISTÓRICA",
            "code": "250070"
        }]
    }, {
        "name": "Grado en Humanidades",
        "code": "G252",
        "school_code": "106",
        "school": "",
        "asignaturas": [{
            "name": "ANTROPOLOGÍA FILOSÓFICA",
            "code": "252002"
        }, {
            "name": "HISTORIA DEL ARTE ANTIGUO Y MEDIEVAL",
            "code": "252000"
        }, {
            "name": "LATÍN I",
            "code": "790001"
        }, {
            "name": "LENGUA ESPAÑOLA I",
            "code": "252003"
        }, {
            "name": "PREHISTORIA Y ARQUEOLOGÍA",
            "code": "252001"
        }, {
            "name": "GEOGRAFÍA HUMANA",
            "code": "252007"
        }, {
            "name": "IDIOMA MODERNO I: ALEMÁN",
            "code": "790005"
        }, {
            "name": "IDIOMA MODERNO I: ÁRABE",
            "code": "252004"
        }, {
            "name": "IDIOMA MODERNO I: INGLÉS",
            "code": "790007"
        }, {
            "name": "LATÍN II",
            "code": "790012"
        }, {
            "name": "LITERATURA ESPAÑOLA MEDIEVAL Y MODERNA",
            "code": "252005"
        }, {
            "name": "ORÍGENES DE EUROPA (SIGLOS VIII a.C.- S. XV d.C.)",
            "code": "252006"
        }, {
            "name": "CULTURA CLÁSICA",
            "code": "252012"
        }, {
            "name": "HISTORIA MODERNA",
            "code": "252008"
        }, {
            "name": "IDIOMA MODERNO II: ÁRABE",
            "code": "252010"
        }, {
            "name": "IDIOMA MODERNO II: INGLÉS",
            "code": "790018"
        }, {
            "name": "LENGUA ESPAÑOLA II",
            "code": "252011"
        }, {
            "name": "TEORÍA DEL CONOCIMIENTO",
            "code": "252009"
        }, {
            "name": "FILOSOFÍA MORAL Y POLÍTICA",
            "code": "252014"
        }, {
            "name": "GEOGRAFÍA FÍSICA",
            "code": "252017"
        }, {
            "name": "HISTORIA CONTEMPORÁNEA",
            "code": "252015"
        }, {
            "name": "HISTORIA DE LA LECTURA",
            "code": "252013"
        }, {
            "name": "HISTORIA DEL ARTE MODERNO",
            "code": "252016"
        }, {
            "name": "IDIOMA MODERNO II: ALEMÁN",
            "code": "790016"
        }, {
            "name": "IDIOMA MODERNO II: FRANCÉS",
            "code": "790017"
        }, {
            "name": "FILOSOFÍA, EMANCIPACIÓN Y GÉNERO",
            "code": "252020"
        }, {
            "name": "GEOGRAFÍA DE ESPAÑA",
            "code": "252018"
        }, {
            "name": "HISTORIA DEL ARTE CONTEMPORÁNEO",
            "code": "252019"
        }, {
            "name": "CONCEPCIONES METAFÍSICAS DEL MUNDO",
            "code": "252022"
        }, {
            "name": "CULTURA AUDIOVISUAL Y CINE",
            "code": "252023"
        }, {
            "name": "LITERATURA ESPAÑOLA CONTEMPORÁNEA",
            "code": "252021"
        }, {
            "name": "TRABAJO FIN DE GRADO",
            "code": "252025"
        }, {
            "name": "PRÁCTICAS EXTERNAS",
            "code": "252024"
        }, {
            "name": "CONSERVACIÓN DE LA MEMORIA ESCRITA",
            "code": "252027"
        }, {
            "name": "CORRIENTES ACTUALES DEL PENSAMIENTO",
            "code": "252040"
        }, {
            "name": "EL TIEMPO DE CERVANTES",
            "code": "252042"
        }, {
            "name": "FILOSOFÍA DE LA CULTURA",
            "code": "252031"
        }, {
            "name": "GEOGRAFÍA DEL MUNDO",
            "code": "252046"
        }, {
            "name": "HISTORIA DE LAS RELIGIONES ANTIGUAS",
            "code": "252034"
        }, {
            "name": "LINGÜÍSTICA: CIENCIA DE LA CULTURA",
            "code": "252045"
        }, {
            "name": "LITERATURA ROMÁNICA",
            "code": "790044"
        }, {
            "name": "POLÍTICAS CULTURALES CONTEMPORÁNEAS",
            "code": "252028"
        }, {
            "name": "PRÁCTICAS EXTERNAS",
            "code": "252024"
        }, {
            "name": "CERVANTES",
            "code": "790062"
        }, {
            "name": "EDICIÓN E INTERPRETACIÓN INTERTEXTUALES",
            "code": "790064"
        }, {
            "name": "GESTIÓN DE PATRIMONIO PREHISTÓRICO",
            "code": "252026"
        }, {
            "name": "LA MEMORIA HISTÓRICA DE AMÉRICA: CRÓNICAS DEL DESCUBRIMIENTO Y DE LA CONQUISTA",
            "code": "252056"
        }, {
            "name": "LITERATURA Y PENSAMIENTO CLÁSICO",
            "code": "252038"
        }, {
            "name": "MITOLOGÍA GRECOLATINA",
            "code": "252044"
        }, {
            "name": "PAISAJES CULTURALES Y NATURALES",
            "code": "252029"
        }, {
            "name": "PRODUCCIÓN LITERARIA Y MEDIOS DE COMUNICACIÓN",
            "code": "790059"
        }]
    }, {
        "name": "Grado en Estudios Ingleses",
        "code": "G251",
        "school_code": "106",
        "school": "",
        "asignaturas": [{
            "name": "ALEMÁN I",
            "code": "251000"
        }, {
            "name": "FRANCÉS I",
            "code": "251001"
        }, {
            "name": "HISTORIA DE LOS PAÍSES DE HABLA INGLESA",
            "code": "251002"
        }, {
            "name": "INGLÉS I",
            "code": "251003"
        }, {
            "name": "LENGUA ESPAÑOLA",
            "code": "251004"
        }, {
            "name": "ALEMÁN II",
            "code": "251006"
        }, {
            "name": "ANÁLISIS LITERARIO DE TEXTOS EN LENGUA INGLESA",
            "code": "251005"
        }, {
            "name": "FRANCÉS II",
            "code": "251007"
        }, {
            "name": "INGLÉS ACADÉMICO",
            "code": "251008"
        }, {
            "name": "INGLÉS II",
            "code": "251009"
        }, {
            "name": "ALEMÁN III",
            "code": "251010"
        }, {
            "name": "FRANCÉS III",
            "code": "251011"
        }, {
            "name": "INGLÉS III",
            "code": "251012"
        }, {
            "name": "INTRODUCCIÓN A LA TRADUCCIÓN (INGLÉS-ESPAÑOL)",
            "code": "251013"
        }, {
            "name": "LINGÜÍSTICA",
            "code": "251014"
        }, {
            "name": "CULTURAS Y CIVILIZACIONES DE LOS PAÍSES DE HABLA INGLESA",
            "code": "251015"
        }, {
            "name": "GRANDES OBRAS DE LA LITERATURA EN LENGUA INGLESA",
            "code": "251016"
        }, {
            "name": "INGLÉS IV",
            "code": "251017"
        }, {
            "name": "HISTORIA DE LA LENGUA INGLESA",
            "code": "251018"
        }, {
            "name": "NARRATIVA INGLESA",
            "code": "251019"
        }, {
            "name": "ANÁLISIS DEL DISCURSO",
            "code": "251020"
        }, {
            "name": "NARRATIVA NORTEAMERICANA",
            "code": "251021"
        }, {
            "name": "TRABAJO FIN DE GRADO",
            "code": "251022"
        }, {
            "name": "PRÁCTICAS EXTERNAS",
            "code": "791009"
        }, {
            "name": "PRÁCTICAS EXTERNAS",
            "code": "251038"
        }, {
            "name": "PRÁCTICAS EXTERNAS",
            "code": "440026"
        }, {
            "name": "TERMINOLOGÍA APLICADA A LA TRADUCCIÓN",
            "code": "791004"
        }, {
            "name": "ARGUMENTACIÓN Y PERSUASIÓN EN INGLÉS",
            "code": "251050"
        }, {
            "name": "BILINGÜISMO",
            "code": "251049"
        }, {
            "name": "GÉNERO, RAZA Y NATURALEZA EN LA LITERATURA CONTEMPORÁNEA EN LENGUA INGLESA",
            "code": "251040"
        }, {
            "name": "HERRAMIENTAS COMPUTACIONALES APLICADAS A LA INVESTIGACIÓN LINGÜÍSTICA",
            "code": "251043"
        }, {
            "name": "LENGUA ESPAÑOLA APLICADA A LA TRADUCCIÓN",
            "code": "440020"
        }, {
            "name": "LENGUA ESPAÑOLA APLICADA A LA TRADUCCIÓN",
            "code": "791003"
        }, {
            "name": "LITERATURA MEDIEVAL INGLESA",
            "code": "251048"
        }, {
            "name": "LITERATURA POSTCOLONIAL EN LENGUA INGLESA",
            "code": "251041"
        }, {
            "name": "PRÁCTICAS EXTERNAS",
            "code": "251038"
        }, {
            "name": "PRAGMÁTICA DE LA LENGUA INGLESA",
            "code": "251042"
        }, {
            "name": "TEORÍA E HISTORIA DEL TEATRO EN LENGUA INGLESA",
            "code": "251024"
        }, {
            "name": "TERMINOLOGÍA APLICADA A LA TRADUCCIÓN",
            "code": "440021"
        }, {
            "name": "ALEMÁN IV",
            "code": "791000"
        }, {
            "name": "SOCIOLINGÜISTICA DEL INGLÉS",
            "code": "251034"
        }, {
            "name": "FRANCÉS IV",
            "code": "791001"
        }, {
            "name": "DIDÁCTICA DEL INGLÉS COMO LENGUA EXTRANJERA Y SUS APLICACIONES INFORMÁTICAS",
            "code": "251051"
        }, {
            "name": "LA MALDAD EN EL ANÁLISIS DE LA FICCIÓN",
            "code": "251046"
        }, {
            "name": "LINGÜÍSTICA COGNITIVA",
            "code": "251047"
        }, {
            "name": "POESÍA NORTEAMERICANA CONTEMPORÁNEA",
            "code": "251045"
        }, {
            "name": "SÁTIRA LITERARIA EN LENGUA INGLESA",
            "code": "251044"
        }]
    }, {
        "name": "Licenciado en Filología Hispánica",
        "code": "790",
        "school_code": "106",
        "school": "",
        "asignaturas": [{
            "name": "DIALECTOLOGÍA ESPAÑOLA II",
            "code": "79224"
        }, {
            "name": "GRAMÁTICA ESPAÑOLA II",
            "code": "79221"
        }, {
            "name": "HISTORIA DE LA LENGUA ESPAÑOLA II",
            "code": "79222"
        }, {
            "name": "LITERATURA ESPAÑOLA DE LOS SIGLOS XVIII Y XIX",
            "code": "79220"
        }, {
            "name": "LITERATURA ESPAÑOLA DEL SIGLO XX",
            "code": "79223"
        }, {
            "name": "TEORÍA Y CRÍTICA DEL TEATRO CONTEMPORÁNEO",
            "code": "79225"
        }, {
            "name": "FILOLOGÍA ROMÁNICA II",
            "code": "79304"
        }, {
            "name": "LATIN VULGAR",
            "code": "79314"
        }, {
            "name": "LITERATURA LATINA RENACENTISTA",
            "code": "79318"
        }, {
            "name": "LITERATURAS ROMÁNICAS MEDIEVALES II",
            "code": "79320"
        }]
    }, {
        "name": "Licenciado en Historia",
        "code": "250",
        "school_code": "106",
        "school": "",
        "asignaturas": [{
            "name": "EL MUNDO ACTUAL",
            "code": "33290"
        }, {
            "name": "ESPAÑA ACTUAL",
            "code": "33291"
        }, {
            "name": "HISTORIA CULTURAL DE LA EDAD MEDIA",
            "code": "33305"
        }, {
            "name": "HISTORIA DEL MUNDO MODERNO",
            "code": "33306"
        }, {
            "name": "PALEOGRAFÍA Y DIPLOMÁTICA.EPIGRAFÍA Y NUMISMÁTICA",
            "code": "33293"
        }, {
            "name": "TENDENCIAS HISTORIOGRÁFICAS ACTUALES",
            "code": "33295"
        }, {
            "name": "CAZADORES EUROPEOS TARDIGLACIARES",
            "code": "33437"
        }, {
            "name": "CULTURAS METALÚRGICAS EUROPEAS",
            "code": "33435"
        }, {
            "name": "DIPLOMÁTICA",
            "code": "33444"
        }, {
            "name": "EL TIEMPO DE CERVANTES",
            "code": "33457"
        }, {
            "name": "FUNDAMENTOS DE PSICOLOGÍA SOCIAL",
            "code": "33448"
        }, {
            "name": "HISTORIA DE IBEROAMÉRICA, SIGLO XIX",
            "code": "33454"
        }, {
            "name": "HISTORIA DE IBEROAMÉRICA, SIGLO XX",
            "code": "33455"
        }, {
            "name": "HISTORIA DE LA IGLESIA CONTEMPORÁNEA",
            "code": "33456"
        }, {
            "name": "HISTORIA DE LAS SOCIEDADES URBANAS DE LA EDAD MEDIA",
            "code": "33440"
        }, {
            "name": "HISTORIA DE LOS ESTADOS UNIDOS DE NORTEAMERICA I",
            "code": "33452"
        }, {
            "name": "HISTORIA DE LOS ESTADOS UNIDOS DE NORTEAMERICA II",
            "code": "33453"
        }, {
            "name": "HISTORIA DEL ARTE BARROCO",
            "code": "33450"
        }, {
            "name": "HISTORIA DEL PENSAMIENTO ESPAÑOL",
            "code": "33447"
        }, {
            "name": "HISTORIA POLÍTICA Y SOCIAL DE LA EDAD MODERNA",
            "code": "33615"
        }, {
            "name": "INSTITUCIONES POLÍTICAS DEL IMPERIO ROMANO",
            "code": "33439"
        }, {
            "name": "MEGALITISMO EN EUROPA",
            "code": "33436"
        }]
    }, {
        "name": "Licenciado en Humanidades",
        "code": "252",
        "school_code": "106",
        "school": "",
        "asignaturas": [{
            "name": "FILOSOFÍA",
            "code": "33275"
        }, {
            "name": "ANTROPOLOGÍA SOCIAL",
            "code": "33274"
        }, {
            "name": "GEOGRAFÍA REGIONAL",
            "code": "33393"
        }, {
            "name": "POBLACIÓN Y RECURSOS",
            "code": "33317"
        }, {
            "name": "PSICOLOGÍA",
            "code": "33278"
        }, {
            "name": "TEORÍA DEL CONOCIMIENTO",
            "code": "33316"
        }, {
            "name": "ESPAÑA ACTUAL",
            "code": "33291"
        }, {
            "name": "FUNDAMENTOS DE PSICOLOGÍA SOCIAL",
            "code": "33448"
        }, {
            "name": "HISTORIA CULTURAL DE LA EDAD MEDIA",
            "code": "33305"
        }, {
            "name": "HISTORIA DEL ARTE BARROCO",
            "code": "33450"
        }, {
            "name": "HISTORIA DEL ARTE ESPAÑOL DE 1600 A 1750",
            "code": "33342"
        }, {
            "name": "HISTORIA ECONÓMICA DE LA EDAD CONTEMPORANEA",
            "code": "33417"
        }, {
            "name": "LINGÜÍSTICA: CIENCIA DE LA CULTURA",
            "code": "33338"
        }, {
            "name": "LITERATURA ROMÁNICA IV",
            "code": "33353"
        }, {
            "name": "SISTEMAS RURALES",
            "code": "33335"
        }, {
            "name": "TÉCNICAS NARRATIVAS AUDIOVISUALES",
            "code": "33344"
        }, {
            "name": "TRADICIÓN Y RECEPCIÓN CLÁSICAS",
            "code": "33337"
        }]
    }, {
        "name": "Grado en Fundamentos de Arquitectura y Urbanismo",
        "code": "G256",
        "school_code": "209",
        "school": "",
        "asignaturas": [{
            "name": "FÍSICA",
            "code": "256000"
        }, {
            "name": "MATEMÁTICAS",
            "code": "256003"
        }, {
            "name": "GEOMETRÍA Y REPRESENTACIÓN I",
            "code": "256001"
        }, {
            "name": "TALLER DE DIBUJO I",
            "code": "256004"
        }, {
            "name": "ANÁLISIS DE FORMAS I",
            "code": "256005"
        }, {
            "name": "GEOMETRÍA Y REPRESENTACIÓN II",
            "code": "256006"
        }, {
            "name": "HISTORIA DEL ARTE",
            "code": "256002"
        }, {
            "name": "PROYECTOS ARQUITECTÓNICOS I",
            "code": "256007"
        }, {
            "name": "ANÁLISIS DE FORMAS II",
            "code": "256008"
        }, {
            "name": "INTRODUCCIÓN A LA CONSTRUCCIÓN",
            "code": "256009"
        }, {
            "name": "PROYECTOS ARQUITECTÓNICOS II",
            "code": "256010"
        }, {
            "name": "TALLER DE DIBUJO II",
            "code": "256011"
        }, {
            "name": "TEORÍA E HISTORIA DE LA ARQUITECTURA I",
            "code": "256012"
        }, {
            "name": "ESTRUCTURAS DE LA EDIFICACIÓN I",
            "code": "256013"
        }, {
            "name": "MATERIALES DE CONSTRUCCIÓN",
            "code": "256014"
        }, {
            "name": "PROYECTOS ARQUITECTÓNICOS III",
            "code": "256015"
        }, {
            "name": "TEORÍA E HISTORIA DE LA ARQUITECTURA II",
            "code": "256016"
        }, {
            "name": "COMPOSICIÓN ARQUITECTÓNICA I",
            "code": "256017"
        }, {
            "name": "CONSTRUCCIONES ARQUITECTÓNICAS I",
            "code": "256018"
        }, {
            "name": "ESTRUCTURAS DE LA EDIFICACIÓN II",
            "code": "256019"
        }, {
            "name": "INSTALACIONES-ACONDICIONAMIENTO",
            "code": "256020"
        }, {
            "name": "PROYECTOS ARQUITECTÓNICOS IV",
            "code": "256021"
        }, {
            "name": "ARQUITECTURA DEL PAISAJE",
            "code": "256022"
        }, {
            "name": "CONSTRUCCIONES ARQUITECTÓNICAS II",
            "code": "256023"
        }, {
            "name": "INSTALACIONES-SERVICIOS",
            "code": "256024"
        }, {
            "name": "PROYECTOS ARQUITECTÓNICOS V",
            "code": "256025"
        }, {
            "name": "URBANÍSTICA I",
            "code": "256026"
        }, {
            "name": "CONSTRUCCIONES ARQUITECTÓNICAS III",
            "code": "256030"
        }, {
            "name": "ESTRUCTURAS DE LA EDIFICACIÓN III",
            "code": "256028"
        }, {
            "name": "PROYECTOS ARQUITECTÓNICOS VI",
            "code": "256027"
        }, {
            "name": "URBANÍSTICA II",
            "code": "256029"
        }, {
            "name": "CONSTRUCCIONES ARQUITECTÓNICAS IV",
            "code": "256031"
        }, {
            "name": "MECÁNICA DEL SUELO Y CIMENTACIONES",
            "code": "256033"
        }, {
            "name": "PROYECTOS ARQUITECTÓNICOS VII",
            "code": "256032"
        }, {
            "name": "URBANÍSTICA III",
            "code": "256035"
        }, {
            "name": "ARQUITECTURA LEGAL",
            "code": "256038"
        }, {
            "name": "COMPOSICIÓN ARQUITECTÓNICA II",
            "code": "256034"
        }, {
            "name": "TALLER DE CONSTRUCCIÓN",
            "code": "256037"
        }, {
            "name": "TRABAJO FIN DE GRADO",
            "code": "256040"
        }, {
            "name": "URBANÍSTICA IV",
            "code": "256039"
        }, {
            "name": "INNOVACIÓN Y PROCESOS. TRANSVERSALIDAD E INTEGRACIÓN DE CONOCIMIENTOS EN ARQUITECTURA",
            "code": "256051"
        }, {
            "name": "INNOVACIÓN Y SOSTENIBILIDAD. DISEÑO PASIVO E INTERVENCIÓN ARQUITECTÓNICA",
            "code": "256049"
        }, {
            "name": "INNOVACIÓN Y TECTÓNICA. EL ARTE DE CONSTRUIR",
            "code": "256050"
        }, {
            "name": "PATRIMONIO INDUSTRIAL",
            "code": "256047"
        }, {
            "name": "PATRIMONIO Y TEORÍA DE LA RESTAURACIÓN",
            "code": "256045"
        }, {
            "name": "PRÁCTICAS EXTERNAS I",
            "code": "256052"
        }, {
            "name": "PRÁCTICAS EXTERNAS II",
            "code": "256053"
        }, {
            "name": "PRÁCTICAS EXTERNAS III",
            "code": "256054"
        }, {
            "name": "TALLER DE DOCUMENTACIÓN DEL PATRIMONIO",
            "code": "256044"
        }, {
            "name": "TALLER DE PROYECTO DE URBANISMO/ARQUITECTURA PAISAJE",
            "code": "256055"
        }, {
            "name": "TALLER DE PROYECTO DE URBANISMO/INFRAESTRUCTURAS",
            "code": "256056"
        }, {
            "name": "TALLER DE PROYECTO DE URBANISMO/VIVIENDA",
            "code": "256057"
        }, {
            "name": "INTRODUCCIÓN A LA ARQUITECTURA (CURSO CERO)",
            "code": "256102"
        }, {
            "name": "TUTORÍAS PERSONALIZADAS",
            "code": "256998"
        }]
    }, {
        "name": "Grado en Arquitectura",
        "code": "G254",
        "school_code": "209",
        "school": "",
        "asignaturas": [{
            "name": "ANÁLISIS DE FORMAS I",
            "code": "254005"
        }, {
            "name": "FÍSICA",
            "code": "254000"
        }, {
            "name": "GEOMETRÍA Y REPRESENTACIÓN I",
            "code": "254001"
        }, {
            "name": "GEOMETRÍA Y REPRESENTACIÓN II",
            "code": "254006"
        }, {
            "name": "HISTORIA DEL ARTE",
            "code": "254002"
        }, {
            "name": "MATEMÁTICAS",
            "code": "254003"
        }, {
            "name": "PROYECTOS ARQUITECTÓNICOS I",
            "code": "254007"
        }, {
            "name": "TALLER DE DIBUJO I",
            "code": "254004"
        }, {
            "name": "ANÁLISIS DE FORMAS II",
            "code": "254008"
        }, {
            "name": "ESTRUCTURAS DE LA EDIFICACIÓN I",
            "code": "254013"
        }, {
            "name": "INTRODUCCIÓN A LA CONSTRUCCIÓN",
            "code": "254009"
        }, {
            "name": "MATERIALES DE CONSTRUCCIÓN",
            "code": "254014"
        }, {
            "name": "PROYECTOS ARQUITECTÓNICOS II",
            "code": "254010"
        }, {
            "name": "PROYECTOS ARQUITECTÓNICOS III",
            "code": "254015"
        }, {
            "name": "TALLER DE DIBUJO II",
            "code": "254011"
        }, {
            "name": "TEORÍA E HISTORIA DE LA ARQUITECTURA I",
            "code": "254012"
        }, {
            "name": "TEORÍA E HISTORIA DE LA ARQUITECTURA II",
            "code": "254016"
        }, {
            "name": "COMPOSICIÓN ARQUITECTÓNICA I",
            "code": "254017"
        }, {
            "name": "CONSTRUCCIONES ARQUITECTÓNICAS I",
            "code": "254018"
        }, {
            "name": "ESTRUCTURAS DE LA EDIFICACIÓN II",
            "code": "254019"
        }, {
            "name": "INSTALACIONES-ACONDICIONAMIENTO",
            "code": "254020"
        }, {
            "name": "PROYECTOS ARQUITECTÓNICOS IV",
            "code": "254021"
        }, {
            "name": "ARQUITECTURA DEL PAISAJE",
            "code": "254022"
        }, {
            "name": "CONSTRUCCIONES ARQUITECTÓNICAS II",
            "code": "254023"
        }, {
            "name": "INSTALACIONES-SERVICIOS",
            "code": "254024"
        }, {
            "name": "PROYECTOS ARQUITECTÓNICOS V",
            "code": "254025"
        }, {
            "name": "URBANÍSTICA I",
            "code": "254026"
        }, {
            "name": "CONSTRUCCIONES ARQUITECTÓNICAS III",
            "code": "254030"
        }, {
            "name": "ESTRUCTURAS DE LA EDIFICACIÓN III",
            "code": "254028"
        }, {
            "name": "PROYECTOS ARQUITECTÓNICOS VI",
            "code": "254027"
        }, {
            "name": "URBANÍSTICA II",
            "code": "254029"
        }, {
            "name": "CONSTRUCCIONES ARQUITECTÓNICAS IV",
            "code": "254031"
        }, {
            "name": "MECÁNICA DEL SUELO Y CIMENTACIONES",
            "code": "254033"
        }, {
            "name": "PROYECTOS ARQUITECTÓNICOS VII",
            "code": "254032"
        }, {
            "name": "URBANÍSTICA III",
            "code": "254035"
        }, {
            "name": "ARQUITECTURA LEGAL",
            "code": "254038"
        }, {
            "name": "COMPOSICIÓN ARQUITECTÓNICA II",
            "code": "254034"
        }, {
            "name": "PROYECTOS ARQUITECTÓNICOS VIII",
            "code": "254041"
        }, {
            "name": "TALLER DE CONSTRUCCIÓN",
            "code": "254037"
        }, {
            "name": "TRABAJO FIN DE GRADO",
            "code": "254040"
        }, {
            "name": "URBANÍSTICA IV",
            "code": "254039"
        }, {
            "name": "INNOVACIÓN Y PROCESOS TRANSVERSALIDAD E INTEGRACIÓN DE CONOCIMIENTOS EN ARQUITECTURA",
            "code": "254051"
        }, {
            "name": "INNOVACIÓN Y SOSTENIBILIDAD. DISEÑO PASIVO E INTERVENC.ARQUITECTÓNICA (INTENSIF.INNOVAC.TECNOLÓGIC",
            "code": "254049"
        }, {
            "name": "INNOVACIÓN Y TECTÓNICA. EL ARTE DE CONSTRUIR (INTENSIFICACIÓN INNOVACIÓN TECNOLÓGICA)",
            "code": "254050"
        }, {
            "name": "PATRIMONIO INDUSTRIAL (INTENSIFICACIÓN PATRIMONIO)",
            "code": "254047"
        }, {
            "name": "PATRIMONIO Y TEORÍA DE LA RESTAURACIÓN (INTENSIFICACIÓN PATRIMONIO)",
            "code": "254045"
        }, {
            "name": "PRÁCTICAS EXTERNAS I",
            "code": "254052"
        }, {
            "name": "PRÁCTICAS EXTERNAS II",
            "code": "254053"
        }, {
            "name": "PRÁCTICAS EXTERNAS III",
            "code": "254054"
        }, {
            "name": "TALLER DE DOCUMENTACIÓN DEL PATRIMONIO (INTENSIFICACIÓN PATRIMONIO)",
            "code": "254044"
        }, {
            "name": "TALLER DE PROYECTO DE URBANISMO /ARQUITECTURA PAISAJE",
            "code": "254055"
        }, {
            "name": "TALLER DE PROYECTO DE URBANISMO/INFRAESTRUCTURAS",
            "code": "254056"
        }, {
            "name": "TALLER DE PROYECTO DE URBANISMO/VIVIENDA",
            "code": "254057"
        }]
    }, {
        "name": "Arquitecto",
        "code": "254",
        "school_code": "209",
        "school": "",
        "asignaturas": [{
            "name": "MATERIALES DE CONSTRUCCIÓN",
            "code": "32912"
        }, {
            "name": "ANÁLISIS DE FORMAS ARQUITECTÓNICAS",
            "code": "32914"
        }, {
            "name": "INTRODUCCIÓN A LAS ESTRUCTURAS DE EDIFICACIÓN",
            "code": "32917"
        }, {
            "name": "CONSTRUCCIONES ARQUITECTÓNICAS I",
            "code": "32927"
        }, {
            "name": "ESTRUCTURAS DE EDIFICACIÓN I",
            "code": "32930"
        }, {
            "name": "INSTALACIONES I",
            "code": "32923"
        }, {
            "name": "AMPLIACIÓN DE PROYECTOS ARQUITECTÓNICOS II",
            "code": "32945"
        }, {
            "name": "COMPOSICIÓN ARQUITECTÓNICA II",
            "code": "32926"
        }, {
            "name": "CONSTRUCCIONES ARQUITECTÓNICAS II",
            "code": "32961"
        }, {
            "name": "ESTRUCTURAS DE EDIFICACIÓN II",
            "code": "32931"
        }, {
            "name": "INSTALACIONES II",
            "code": "32924"
        }, {
            "name": "PROYECTOS ARQUITECTÓNICOS IV",
            "code": "32933"
        }, {
            "name": "URBANISMO II",
            "code": "32936"
        }, {
            "name": "PROYECTO FIN DE CARRERA",
            "code": "32938"
        }, {
            "name": "ARQUITECTURA LEGAL",
            "code": "32948"
        }, {
            "name": "CONSTRUCCIONES ARQUITECTÓNICAS III",
            "code": "32929"
        }, {
            "name": "INNOVACIONES TECNOLÓGICAS",
            "code": "32946"
        }, {
            "name": "PROYECTOS ARQUITECTÓNICOS V",
            "code": "32934"
        }, {
            "name": "RESTAURACIÓN DE EDIFICIOS Y CONJUNTOS Y REHABILITACIÓN",
            "code": "32947"
        }, {
            "name": "ANÁLISIS Y REHABILITACIÓN DE ESTRUCTURAS",
            "code": "33145"
        }, {
            "name": "ARQUEOLOGÍA INDUSTRIAL Y MEDIO AMBIENTE",
            "code": "32958"
        }, {
            "name": "MEDIO AMBIENTE Y CAMBIO TECNOLÓGICO",
            "code": "32954"
        }, {
            "name": "PROYECTOS Y MÉTODOS EN LA TÉCNICA CONSTRUCTIVA RESTAURADORA",
            "code": "32957"
        }, {
            "name": "REDES DE INFRAESTRUCTURAS Y COMUNICACIÓN",
            "code": "32952"
        }]
    }, {
        "name": "Ingeniero en Geodesia y Cartografía",
        "code": "161",
        "school_code": "209",
        "school": "",
        "asignaturas": [{
            "name": "AMPLIACIÓN DE FÍSICA",
            "code": "31634"
        }, {
            "name": "AMPLIACIÓN DE MATEMÁTICAS",
            "code": "31639"
        }, {
            "name": "CARTOGRAFÍA MATEMÁTICA",
            "code": "31637"
        }, {
            "name": "DINÁMICA TERRESTRE",
            "code": "31641"
        }, {
            "name": "DISEÑO Y REDACCIÓN CARTOGRÁFICA",
            "code": "31633"
        }, {
            "name": "INFORMÁTICA APLICADA",
            "code": "32378"
        }, {
            "name": "MÉTODOS MATEMÁTICOS",
            "code": "31630"
        }, {
            "name": "PROYECTO FIN DE CARRERA",
            "code": "32270"
        }, {
            "name": "FOTOGRAMETRÍA DIGITAL",
            "code": "32263"
        }, {
            "name": "GEODESIA SUPERIOR",
            "code": "32264"
        }, {
            "name": "GEOFÍSICA",
            "code": "32265"
        }, {
            "name": "GESTIÓN DE EMPRESAS",
            "code": "32268"
        }, {
            "name": "PROCESOS CARTOGRÁFICOS",
            "code": "32266"
        }, {
            "name": "PROYECTOS",
            "code": "32267"
        }, {
            "name": "APLICACIONES DE LOS SISTEMAS DE INFORMACIÓN GEOGRÁFICA EN LOS TEMAS AMBIENTALES",
            "code": "32100"
        }, {
            "name": "ATLAS TEMÁTICOS",
            "code": "32254"
        }, {
            "name": "CARTOGRAFÍA TEMÁTICA AMBIENTAL",
            "code": "32101"
        }, {
            "name": "GENERALIZACIÓN CARTOGRÁFICA",
            "code": "32251"
        }, {
            "name": "INSTRUMENTACIÓN",
            "code": "32255"
        }, {
            "name": "PROGRAMACIÓN ORIENTADA AL OBJETO",
            "code": "32262"
        }, {
            "name": "SISTEMAS DE IMPRESIÓN Y TRAZADO",
            "code": "32249"
        }, {
            "name": "SISTEMAS GRÁFICOS INTERACTIVOS",
            "code": "32252"
        }, {
            "name": "TÉCNICAS DE EXPLOTACIÓN CARTOGRÁFICA DIGITAL",
            "code": "32253"
        }]
    }, {
        "name": "Grado en Ingeniería Electrónica de Comunicaciones",
        "code": "G37",
        "school_code": "203",
        "school": "",
        "asignaturas": [{
            "name": "ÁLGEBRA LINEAL",
            "code": "350000"
        }, {
            "name": "CÁLCULO I",
            "code": "350001"
        }, {
            "name": "FUNDAMENTOS FÍSICOS I",
            "code": "350002"
        }, {
            "name": "SISTEMAS INFORMÁTICOS",
            "code": "350003"
        }, {
            "name": "TEORÍA DE CIRCUITOS",
            "code": "350004"
        }, {
            "name": "ANÁLISIS DE CIRCUITOS",
            "code": "350005"
        }, {
            "name": "CÁLCULO II",
            "code": "350006"
        }, {
            "name": "ELECTRÓNICA DIGITAL",
            "code": "350007"
        }, {
            "name": "FUNDAMENTOS FÍSICOS II",
            "code": "350008"
        }, {
            "name": "PROGRAMACIÓN",
            "code": "350009"
        }, {
            "name": "ARQUITECTURA DE REDES I",
            "code": "350010"
        }, {
            "name": "ELECTRÓNICA BÁSICA",
            "code": "350011"
        }, {
            "name": "ESTADÍSTICA",
            "code": "350012"
        }, {
            "name": "SEÑALES Y SISTEMAS",
            "code": "350013"
        }, {
            "name": "SISTEMAS ELECTRÓNICOS DIGITALES",
            "code": "350014"
        }, {
            "name": "TEORÍA DE LA COMUNICACIÓN",
            "code": "350019"
        }, {
            "name": "ARQUITECTURA DE REDES II",
            "code": "350015"
        }, {
            "name": "ECONOMÍA DE LA EMPRESA",
            "code": "350016"
        }, {
            "name": "ELECTRÓNICA DE CIRCUITOS",
            "code": "350018"
        }, {
            "name": "PROPAGACIÓN DE ONDAS",
            "code": "350022"
        }, {
            "name": "CONTROL ELECTRÓNICO",
            "code": "370002"
        }, {
            "name": "DISEÑO ELECTRÓNICO",
            "code": "370010"
        }, {
            "name": "ELECTRÓNICA DE POTENCIA",
            "code": "370000"
        }, {
            "name": "INSTRUMENTACIÓN ELECTRÓNICA",
            "code": "370001"
        }, {
            "name": "REDES DE COMUNICACIONES",
            "code": "350023"
        }, {
            "name": "SUBSISTEMAS ELECTRÓNICOS",
            "code": "370011"
        }, {
            "name": "CONTROL ELECTRÓNICO",
            "code": "370002"
        }, {
            "name": "SISTEMAS ELECTRÓNICOS DIGITALES AVANZADOS",
            "code": "350031"
        }, {
            "name": "TECNOLOGÍA ELECTRÓNICA",
            "code": "370003"
        }, {
            "name": "SISTEMAS ELECTRÓNICOS DE COMUNICACIONES",
            "code": "370004"
        }, {
            "name": "TRABAJO FIN DE GRADO",
            "code": "370005"
        }, {
            "name": "PRÁCTICAS EXTERNAS",
            "code": "370019"
        }, {
            "name": "CONTROL INDUSTRIAL",
            "code": "370006"
        }, {
            "name": "ELECTRÓNICA BIOMÉDICA",
            "code": "370013"
        }, {
            "name": "ELECTRÓNICA PARA ENERGÍAS RENOVABLES",
            "code": "370014"
        }, {
            "name": "RUIDO E INTERFERENCIAS EN SISTEMAS ELECTRÓNICOS",
            "code": "370008"
        }, {
            "name": "TECNOLOGÍAS FOTÓNICAS",
            "code": "370007"
        }, {
            "name": "VISIÓN ARTIFICIAL",
            "code": "370009"
        }, {
            "name": "ARQUITECTURA DE COMPUTADORES",
            "code": "370017"
        }, {
            "name": "BASES DE DATOS",
            "code": "370022"
        }, {
            "name": "COMPATIBILIDAD ELECTROMAGNÉTICA EN LOS SISTEMAS DE TELECOMUNICACIÓN",
            "code": "370020"
        }, {
            "name": "COMUNICACIONES DIGITALES",
            "code": "370016"
        }, {
            "name": "INGENIERÍA DEL SOFTWARE",
            "code": "370021"
        }, {
            "name": "PROGRAMACIÓN VISUAL",
            "code": "380012"
        }, {
            "name": "TECNOLOGÍAS FOTÓNICAS",
            "code": "370007"
        }, {
            "name": "TRATAMIENTO DE SEÑALES BIOMÉDICAS",
            "code": "370018"
        }]
    }, {
        "name": "Grado en Ingeniería en Electrónica y Automática Industrial",
        "code": "G60",
        "school_code": "203",
        "school": "",
        "asignaturas": [{
            "name": "ÁLGEBRA LINEAL Y ECUACIONES DIFERENCIALES",
            "code": "600000"
        }, {
            "name": "CÁLCULO I",
            "code": "600025"
        }, {
            "name": "EXPRESIÓN GRÁFICA",
            "code": "600001"
        }, {
            "name": "FÍSICA I",
            "code": "600002"
        }, {
            "name": "INFORMÁTICA",
            "code": "600005"
        }, {
            "name": "ANÁLISIS DE CIRCUITOS",
            "code": "600026"
        }, {
            "name": "CÁLCULO II",
            "code": "600027"
        }, {
            "name": "FÍSICA II",
            "code": "600004"
        }, {
            "name": "QUÍMICA",
            "code": "600003"
        }, {
            "name": "SISTEMAS MECÁNICOS",
            "code": "600006"
        }, {
            "name": "CIENCIA DE LOS MATERIALES",
            "code": "600007"
        }, {
            "name": "ELECTRÓNICA ANALÓGICA",
            "code": "600008"
        }, {
            "name": "ELECTRÓNICA DIGITAL",
            "code": "600028"
        }, {
            "name": "ESTADÍSTICA",
            "code": "600029"
        }, {
            "name": "INGENIERÍA TÉRMICA",
            "code": "600009"
        }, {
            "name": "ECONOMÍA DE LA EMPRESA",
            "code": "600031"
        }, {
            "name": "INFORMÁTICA INDUSTRIAL",
            "code": "600011"
        }, {
            "name": "INGENIERÍA DE CONTROL I",
            "code": "600010"
        }, {
            "name": "MECÁNICA DE FLUIDOS",
            "code": "600015"
        }, {
            "name": "TECNOLOGÍA ELECTRÓNICA",
            "code": "600012"
        }, {
            "name": "AUTOMATIZACIÓN",
            "code": "600013"
        }, {
            "name": "INGENIERÍA DE CONTROL II",
            "code": "600016"
        }, {
            "name": "MÁQUINAS ELÉCTRICAS",
            "code": "600014"
        }, {
            "name": "SISTEMAS ELECTRÓNICOS DIGITALES",
            "code": "600030"
        }, {
            "name": "ELECTRÓNICA DE POTENCIA",
            "code": "600017"
        }, {
            "name": "INGENIERÍA DE CONTROL ELECTRÓNICO",
            "code": "600020"
        }, {
            "name": "INSTRUMENTACIÓN ELECTRÓNICA",
            "code": "600018"
        }, {
            "name": "RESISTENCIA DE MATERIALES",
            "code": "600019"
        }, {
            "name": "PROYECTOS",
            "code": "600021"
        }, {
            "name": "SISTEMAS DE PRODUCCIÓN INDUSTRIAL",
            "code": "600022"
        }, {
            "name": "SISTEMAS ROBOTIZADOS",
            "code": "600023"
        }, {
            "name": "TRABAJO FIN DE GRADO",
            "code": "600024"
        }, {
            "name": "PRÁCTICAS EXTERNAS",
            "code": "600043"
        }, {
            "name": "CENTRALES ELÉCTRICAS",
            "code": "600036"
        }, {
            "name": "CONTROL INTELIGENTE",
            "code": "600038"
        }, {
            "name": "DISEÑO ELECTRÓNICO",
            "code": "600033"
        }, {
            "name": "INSTALACIONES ELÉCTRICAS INDUSTRIALES",
            "code": "600041"
        }, {
            "name": "SISTEMAS DE TIEMPO REAL",
            "code": "600039"
        }, {
            "name": "VISIÓN ARTIFICIAL",
            "code": "600034"
        }, {
            "name": "CONTROL DE CONVERTIDORES DE ELECTRÓNICA DE POTENCIA",
            "code": "600037"
        }, {
            "name": "GENERACIÓN ELÉCTRICA MEDIANTE ENERGÍAS RENOVABLES",
            "code": "600042"
        }, {
            "name": "REGULACIÓN DE MÁQUINAS ELÉCTRICAS",
            "code": "600040"
        }, {
            "name": "SISTEMAS ELECTRÓNICOS DIGITALES AVANZADOS",
            "code": "600032"
        }]
    }, {
        "name": "Grado en Ingeniería en Sistemas de Telecomunicación",
        "code": "G39",
        "school_code": "203",
        "school": "",
        "asignaturas": [{
            "name": "ÁLGEBRA LINEAL",
            "code": "350000"
        }, {
            "name": "CÁLCULO I",
            "code": "350001"
        }, {
            "name": "FUNDAMENTOS FÍSICOS I",
            "code": "350002"
        }, {
            "name": "SISTEMAS INFORMÁTICOS",
            "code": "350003"
        }, {
            "name": "TEORÍA DE CIRCUITOS",
            "code": "350004"
        }, {
            "name": "ANÁLISIS DE CIRCUITOS",
            "code": "350005"
        }, {
            "name": "CÁLCULO II",
            "code": "350006"
        }, {
            "name": "ELECTRÓNICA DIGITAL",
            "code": "350007"
        }, {
            "name": "FUNDAMENTOS FÍSICOS II",
            "code": "350008"
        }, {
            "name": "PROGRAMACIÓN",
            "code": "350009"
        }, {
            "name": "ARQUITECTURA DE REDES I",
            "code": "350010"
        }, {
            "name": "ELECTRÓNICA BÁSICA",
            "code": "350011"
        }, {
            "name": "ESTADÍSTICA",
            "code": "350012"
        }, {
            "name": "SEÑALES Y SISTEMAS",
            "code": "350013"
        }, {
            "name": "SISTEMAS ELECTRÓNICOS DIGITALES",
            "code": "350014"
        }, {
            "name": " TEORÍA DE LA COMUNICACIÓN",
            "code": "350019"
        }, {
            "name": "ARQUITECTURA DE REDES II",
            "code": "350015"
        }, {
            "name": "ECONOMÍA DE LA EMPRESA",
            "code": "350016"
        }, {
            "name": "ELECTRÓNICA DE CIRCUITOS",
            "code": "350018"
        }, {
            "name": "PROPAGACIÓN DE ONDAS",
            "code": "350022"
        }, {
            "name": "CIRCUITOS DE COMUNICACIÓN",
            "code": "390000"
        }, {
            "name": "COMUNICACIONES DIGITALES",
            "code": "350025"
        }, {
            "name": "REDES DE COMUNICACIONES",
            "code": "350023"
        }, {
            "name": "TECNOLOGÍAS DE ALTA FRECUENCIA",
            "code": "350028"
        }, {
            "name": "TRATAMIENTO DIGITAL DE SEÑALES",
            "code": "350024"
        }, {
            "name": "COMUNICACIONES DIGITALES",
            "code": "350025"
        }, {
            "name": "COMUNICACIONES MÓVILES",
            "code": "390001"
        }, {
            "name": "RADIACIÓN Y RADIOCOMUNICACIÓN",
            "code": "390002"
        }, {
            "name": "SISTEMAS DE TELECOMUNICACIÓN",
            "code": "390003"
        }, {
            "name": "TECNOLOGÍAS DE ALTA FRECUENCIA",
            "code": "350028"
        }, {
            "name": "TRATAMIENTO DIGITAL DE SEÑALES",
            "code": "350024"
        }, {
            "name": "COMUNICACIONES ÓPTICAS",
            "code": "390004"
        }, {
            "name": "TRABAJO FIN DE GRADO",
            "code": "390005"
        }, {
            "name": "PRÁCTICAS EXTERNAS",
            "code": "390014"
        }, {
            "name": "AMPLIACIÓN DE SISTEMAS DE TELECOMUNICACIÓN",
            "code": "390008"
        }, {
            "name": "COMUNICACIONES POR SATÉLITE",
            "code": "390010"
        }, {
            "name": "PROCESADO DE IMAGEN Y VISION POR COMPUTADOR",
            "code": "390012"
        }, {
            "name": "PROCESADO DE VOZ Y AUDIO",
            "code": "390007"
        }, {
            "name": "RADIODETERMINACIÓN Y RADAR",
            "code": "390006"
        }, {
            "name": "TECNOLOGÍAS FOTÓNICAS",
            "code": "370007"
        }, {
            "name": "TECNOLOGÍAS INALÁMBRICAS",
            "code": "390009"
        }, {
            "name": "ARQUITECTURA DE COMPUTADORES",
            "code": "370017"
        }, {
            "name": "BASES DE DATOS",
            "code": "370022"
        }, {
            "name": "INGENIERÍA DEL SOFTWARE",
            "code": "370021"
        }, {
            "name": "PROGRAMACIÓN VISUAL",
            "code": "380012"
        }, {
            "name": "SISTEMAS ELECTRÓNICOS DIGITALES AVANZADOS",
            "code": "380016"
        }, {
            "name": "TECNOLOGÍAS FOTÓNICAS",
            "code": "370007"
        }]
    }, {
        "name": "Grado en Ingeniería en Tecnologías de la Telecomunicación ",
        "code": "G35",
        "school_code": "203",
        "school": "",
        "asignaturas": [{
            "name": "ÁLGEBRA LINEAL",
            "code": "350000"
        }, {
            "name": "CÁLCULO I",
            "code": "350001"
        }, {
            "name": "FUNDAMENTOS FÍSICOS I",
            "code": "350002"
        }, {
            "name": "SISTEMAS INFORMÁTICOS",
            "code": "350003"
        }, {
            "name": "TEORÍA DE CIRCUITOS",
            "code": "350004"
        }, {
            "name": "ANÁLISIS DE CIRCUITOS",
            "code": "350005"
        }, {
            "name": "CÁLCULO II",
            "code": "350006"
        }, {
            "name": "ELECTRÓNICA DIGITAL",
            "code": "350007"
        }, {
            "name": "FUNDAMENTOS FÍSICOS II",
            "code": "350008"
        }, {
            "name": "PROGRAMACIÓN",
            "code": "350009"
        }, {
            "name": "ARQUITECTURA DE REDES I",
            "code": "350010"
        }, {
            "name": "ELECTRÓNICA BÁSICA",
            "code": "350011"
        }, {
            "name": "ESTADÍSTICA",
            "code": "350012"
        }, {
            "name": "SEÑALES Y SISTEMAS",
            "code": "350013"
        }, {
            "name": "SISTEMAS ELECTRÓNICOS DIGITALES",
            "code": "350014"
        }, {
            "name": " TEORÍA DE LA COMUNICACIÓN",
            "code": "350019"
        }, {
            "name": "ARQUITECTURA DE REDES II",
            "code": "350015"
        }, {
            "name": "ECONOMÍA DE LA EMPRESA",
            "code": "350016"
        }, {
            "name": "ECUACIONES DIFERENCIALES Y MÉTODOS NUMÉRICOS",
            "code": "350017"
        }, {
            "name": "ELECTRÓNICA DE CIRCUITOS",
            "code": "350018"
        }, {
            "name": "ARQUITECTURA DE COMPUTADORES",
            "code": "350020"
        }, {
            "name": "COMUNICACIONES DIGITALES",
            "code": "350025"
        }, {
            "name": "DISEÑO ELECTRÓNICO",
            "code": "350021"
        }, {
            "name": "PROPAGACIÓN DE ONDAS",
            "code": "350022"
        }, {
            "name": "REDES DE COMUNICACIONES",
            "code": "350023"
        }, {
            "name": "TRATAMIENTO DIGITAL DE SEÑALES",
            "code": "350024"
        }, {
            "name": "COMUNICACIONES DIGITALES",
            "code": "350025"
        }, {
            "name": "SISTEMAS OPERATIVOS",
            "code": "350026"
        }, {
            "name": "SUBSISTEMAS ELECTRÓNICOS",
            "code": "350027"
        }, {
            "name": "TECNOLOGÍAS DE ALTA FRECUENCIA",
            "code": "350028"
        }, {
            "name": "TRATAMIENTO DIGITAL DE SEÑALES",
            "code": "350024"
        }, {
            "name": "CONMUTACIÓN",
            "code": "350029"
        }, {
            "name": "SISTEMAS ELECTRÓNICOS DIGITALES AVANZADOS",
            "code": "350031"
        }, {
            "name": "TRABAJO FIN DE GRADO",
            "code": "350050"
        }, {
            "name": "TRABAJO FIN DE GRADO",
            "code": "350032"
        }, {
            "name": "PRÁCTICAS EXTERNAS",
            "code": "350052"
        }, {
            "name": "CIRCUITOS DE COMUNICACIÓN",
            "code": "350034"
        }, {
            "name": "COMUNICACIONES ÓPTICAS",
            "code": "350033"
        }, {
            "name": "ELECTRÓNICA DE COMUNICACIONES",
            "code": "350030"
        }, {
            "name": "ELECTRÓNICA DE POTENCIA",
            "code": "350044"
        }, {
            "name": "INSTRUMENTACIÓN ELECTRÓNICA",
            "code": "350043"
        }, {
            "name": "PROGRAMACIÓN AVANZADA",
            "code": "350041"
        }, {
            "name": "RADIACIÓN Y RADIOCOMUNICACIÓN",
            "code": "350037"
        }, {
            "name": "SEGURIDAD",
            "code": "350039"
        }, {
            "name": "SERVICIOS TELEMÁTICOS",
            "code": "350038"
        }, {
            "name": "COMUNICACIONES MÓVILES",
            "code": "350035"
        }, {
            "name": "CONTROL ELECTRÓNICO",
            "code": "350045"
        }, {
            "name": "INGENIERÍA DE TRÁFICO",
            "code": "350040"
        }, {
            "name": "LABORATORIO DE REDES, SISTEMAS Y SERVICIOS",
            "code": "350042"
        }, {
            "name": "SISTEMAS DE TELECOMUNICACIÓN",
            "code": "350036"
        }, {
            "name": "TECNOLOGÍA ELECTRÓNICA",
            "code": "350046"
        }, {
            "name": "PROGRAMACIÓN DE SISTEMAS DE ALTO RENDIMIENTO",
            "code": "350049"
        }, {
            "name": "SMART TICS",
            "code": "350048"
        }, {
            "name": "VISION ARTIFICIAL",
            "code": "350051"
        }]
    }, {
        "name": "Grado en Ingeniería Telemática",
        "code": "G38",
        "school_code": "203",
        "school": "",
        "asignaturas": [{
            "name": "ÁLGEBRA LINEAL",
            "code": "350000"
        }, {
            "name": "CÁLCULO I",
            "code": "350001"
        }, {
            "name": "FUNDAMENTOS FÍSICOS I",
            "code": "350002"
        }, {
            "name": "SISTEMAS INFORMÁTICOS",
            "code": "350003"
        }, {
            "name": "TEORÍA DE CIRCUITOS",
            "code": "350004"
        }, {
            "name": "ANÁLISIS DE CIRCUITOS",
            "code": "350005"
        }, {
            "name": "CÁLCULO II",
            "code": "350006"
        }, {
            "name": "ELECTRÓNICA DIGITAL",
            "code": "350007"
        }, {
            "name": "FUNDAMENTOS FÍSICOS II",
            "code": "350008"
        }, {
            "name": "PROGRAMACIÓN",
            "code": "350009"
        }, {
            "name": "ARQUITECTURA DE REDES I",
            "code": "350010"
        }, {
            "name": "ELECTRÓNICA BÁSICA",
            "code": "350011"
        }, {
            "name": "ESTADÍSTICA",
            "code": "350012"
        }, {
            "name": "SEÑALES Y SISTEMAS",
            "code": "350013"
        }, {
            "name": "SISTEMAS ELECTRÓNICOS DIGITALES",
            "code": "350014"
        }, {
            "name": " TEORÍA DE LA COMUNICACIÓN",
            "code": "350019"
        }, {
            "name": "ARQUITECTURA DE REDES II",
            "code": "350015"
        }, {
            "name": "ECONOMÍA DE LA EMPRESA",
            "code": "350016"
        }, {
            "name": "ELECTRÓNICA DE CIRCUITOS",
            "code": "350018"
        }, {
            "name": "PROPAGACIÓN DE ONDAS",
            "code": "350022"
        }, {
            "name": "ARQUITECTURA DE COMPUTADORES",
            "code": "380000"
        }, {
            "name": "PROGRAMACIÓN AVANZADA",
            "code": "380001"
        }, {
            "name": "REDES DE COMUNICACIONES",
            "code": "350023"
        }, {
            "name": "SEGURIDAD",
            "code": "380002"
        }, {
            "name": "SERVICIOS TELEMÁTICOS",
            "code": "380003"
        }, {
            "name": "CONMUTACIÓN",
            "code": "380004"
        }, {
            "name": "LABORATORIO DE REDES, SISTEMAS Y SERVICIOS",
            "code": "380005"
        }, {
            "name": "SISTEMAS OPERATIVOS",
            "code": "380006"
        }, {
            "name": "INGENIERÍA DE TRÁFICO",
            "code": "380007"
        }, {
            "name": "TRABAJO FIN DE GRADO",
            "code": "380008"
        }, {
            "name": "PRÁCTICAS EXTERNAS",
            "code": "380017"
        }, {
            "name": "AMPLIACIÓN DE SISTEMAS OPERATIVOS",
            "code": "380015"
        }, {
            "name": "GESTIÓN Y ADMINISTRACIÓN DE REDES",
            "code": "380010"
        }, {
            "name": "INGENIERÍA DE REDES Y SERVICIOS",
            "code": "380018"
        }, {
            "name": "PROGRAMACIÓN VISUAL",
            "code": "380012"
        }, {
            "name": "TECNOLOGÍAS EMERGENTES DE RED",
            "code": "380009"
        }, {
            "name": "TECNOLOGÍAS FOTÓNICAS",
            "code": "370007"
        }, {
            "name": "BASES DE DATOS",
            "code": "370022"
        }, {
            "name": "COMUNICACIONES DIGITALES",
            "code": "370016"
        }, {
            "name": "COMUNICACIONES MÓVILES",
            "code": "350035"
        }, {
            "name": "INGENIERÍA DEL SOFTWARE",
            "code": "370021"
        }, {
            "name": "SISTEMAS ELECTRÓNICOS DIGITALES AVANZADOS",
            "code": "380016"
        }, {
            "name": "TECNOLOGÍAS FOTÓNICAS",
            "code": "370007"
        }]
    }, {
        "name": "Ingeniero en Telecomunicación",
        "code": "177",
        "school_code": "203",
        "school": "",
        "asignaturas": [{
            "name": "INTRODUCCIÓN A LOS SISTEMAS ELECTRÓNICOS DIGITALES",
            "code": "31944"
        }, {
            "name": "SEÑALES Y SISTEMAS II",
            "code": "32410"
        }, {
            "name": "SISTEMAS ELECTRÓNICOS DIGITALES",
            "code": "32411"
        }, {
            "name": "TRANSMISIÓN DE DATOS",
            "code": "32412"
        }, {
            "name": "ARQUITECTURA DE COMPUTADORES",
            "code": "32418"
        }, {
            "name": "CONMUTACIÓN",
            "code": "32424"
        }, {
            "name": "DISEÑO DE CIRCUITOS Y SISTEMAS ELECTRÓNICOS",
            "code": "32420"
        }, {
            "name": "INSTRUMENTACIÓN ELECTRÓNICA",
            "code": "32421"
        }, {
            "name": "RADIACIÓN Y RADIOCOMUNICACIÓN",
            "code": "32422"
        }, {
            "name": "REDES DE COMPUTADORES",
            "code": "32423"
        }, {
            "name": "TRANSMISIÓN POR SOPORTE FÍSICO",
            "code": "32427"
        }, {
            "name": "TRATAMIENTO DIGITAL DE SEÑALES",
            "code": "32426"
        }, {
            "name": "PROYECTO FIN DE CARRERA",
            "code": "32430"
        }, {
            "name": "COMUNICACIONES ÓPTICAS",
            "code": "32419"
        }, {
            "name": "ORGANIZACIÓN DE EMPRESAS",
            "code": "32429"
        }, {
            "name": "PROYECTOS",
            "code": "32428"
        }, {
            "name": "SISTEMAS Y SERVICIOS DE COMUNICACIÓN",
            "code": "32425"
        }, {
            "name": "AMPLIACIÓN DE SISTEMAS OPERATIVOS",
            "code": "32379"
        }, {
            "name": "APLICACIONES TELEMÁTICAS",
            "code": "33033"
        }, {
            "name": "COMPATIBILIDAD ELECTROMAGNÉTICA",
            "code": "32372"
        }, {
            "name": "COMUNICACIONES MÓVILES",
            "code": "32359"
        }, {
            "name": "FUNDAMENTOS DE BIOINGENIERÍA",
            "code": "32365"
        }, {
            "name": "GESTIÓN DE REDES",
            "code": "32357"
        }, {
            "name": "INGENIERÍA DEL SOFTWARE",
            "code": "32370"
        }, {
            "name": "INSTRUMENTACIÓN BIOMÉDICA",
            "code": "32366"
        }, {
            "name": "LABORATORIO DE CONTROL ELECTRÓNICO",
            "code": "32368"
        }, {
            "name": "RADAR",
            "code": "32361"
        }, {
            "name": "RADIODETERMINACIÓN",
            "code": "32364"
        }, {
            "name": "RADIODIFUSIÓN",
            "code": "32360"
        }, {
            "name": "REDES DE BANDA ANCHA",
            "code": "32358"
        }, {
            "name": "SISTEMAS ELECTRÓNICOS DE CONTROL",
            "code": "32367"
        }, {
            "name": "SISTEMAS RADIANTES",
            "code": "32373"
        }, {
            "name": "TRANSPORTE DE DATOS",
            "code": "32353"
        }, {
            "name": "TRATAMIENTO DE LA SEÑAL RADAR",
            "code": "32374"
        }, {
            "name": "TRATAMIENTO DIGITAL DE IMÁGENES",
            "code": "32362"
        }, {
            "name": "TRATAMIENTO DIGITAL DE LA VOZ",
            "code": "32363"
        }, {
            "name": "INTRODUCCIÓN A LOS SISTEMAS ELECTRÓNICOS DIGITALES",
            "code": "31944"
        }, {
            "name": "SEÑALES Y SISTEMAS II",
            "code": "32410"
        }, {
            "name": "SISTEMAS ELECTRÓNICOS DIGITALES",
            "code": "32411"
        }, {
            "name": "TRANSMISIÓN DE DATOS",
            "code": "32412"
        }]
    }, {
        "name": "Ingeniero en Electronica",
        "code": "178",
        "school_code": "203",
        "school": "",
        "asignaturas": [{
            "name": "TECNOLOGÍA DE DISPOSITIVOS Y COMPONENTES ELECTRÓNICOS Y FOTÓNICOS",
            "code": "32305"
        }, {
            "name": "TRATAMIENTO Y TRANSMISIÓN DE SEÑALES",
            "code": "32307"
        }, {
            "name": "PROYECTO FIN DE CARRERA",
            "code": "32316"
        }, {
            "name": "DISEÑO DE CIRCUITOS Y SISTEMAS ELECTRÓNICOS",
            "code": "32312"
        }, {
            "name": "ORGANIZACIÓN DE EMPRESAS",
            "code": "32315"
        }, {
            "name": "PROYECTOS",
            "code": "32314"
        }, {
            "name": "SISTEMAS DE COMUNICACIÓN",
            "code": "32313"
        }, {
            "name": "SISTEMAS ELECTRÓNICOS DIGITALES AVANZADOS",
            "code": "32311"
        }, {
            "name": "COMPATIBILIDAD ELECTROMAGNÉTICA",
            "code": "32339"
        }, {
            "name": "CONTROL ELECTRÓNICO DIGITAL",
            "code": "32318"
        }, {
            "name": "CONTROL NEURONAL Y BORROSO",
            "code": "32332"
        }, {
            "name": "ELECTRONICA INDUSTRIAL",
            "code": "32333"
        }, {
            "name": "FUNDAMENTOS DE BIOINGENIERÍA",
            "code": "32322"
        }, {
            "name": "INGENIERÍA DEL SOFTWARE",
            "code": "32386"
        }, {
            "name": "INSTRUMENTACIÓN BIOMÉDICA",
            "code": "32329"
        }, {
            "name": "SISTEMAS DE CONTROL EN TIEMPO REAL",
            "code": "32334"
        }, {
            "name": "TRATAMIENTO DE SEÑALES BIOLÓGICAS",
            "code": "32331"
        }]
    }, {
        "name": "Grado en Ingeniería Informática",
        "code": "G780",
        "school_code": "210",
        "school": "",
        "asignaturas": [{
            "name": "ESTADÍSTICA",
            "code": "780004"
        }, {
            "name": "FÍSICA",
            "code": "780000"
        }, {
            "name": "FUNDAMENTOS DE PROGRAMACIÓN",
            "code": "780003"
        }, {
            "name": "FUNDAMENTOS DE TECNOLOGÍA DE COMPUTADORES",
            "code": "780002"
        }, {
            "name": "FUNDAMENTOS MATEMÁTICOS",
            "code": "780001"
        }, {
            "name": "ESTRUCTURAS DISCRETAS",
            "code": "780008"
        }, {
            "name": "FUNDAMENTOS DE LA EMPRESA",
            "code": "780006"
        }, {
            "name": "PROGRAMACIÓN",
            "code": "780005"
        }, {
            "name": "SISTEMAS OPERATIVOS",
            "code": "780007"
        }, {
            "name": "ARQUITECTURA DE REDES",
            "code": "780011"
        }, {
            "name": "ESTRUCTURA Y ORGANIZACIÓN DE COMPUTADORES",
            "code": "780010"
        }, {
            "name": "ESTRUCTURAS DE DATOS",
            "code": "780009"
        }, {
            "name": "MATEMÁTICAS AVANZADAS",
            "code": "780013"
        }, {
            "name": "SISTEMAS OPERATIVOS AVANZADOS",
            "code": "780012"
        }, {
            "name": "BASES DE DATOS",
            "code": "780016"
        }, {
            "name": "INGENIERÍA DEL SOFTWARE",
            "code": "780015"
        }, {
            "name": "PROGRAMACIÓN AVANZADA",
            "code": "780014"
        }, {
            "name": "REDES DE COMPUTADORES",
            "code": "780017"
        }, {
            "name": "ALGORITMIA Y COMPLEJIDAD",
            "code": "780021"
        }, {
            "name": "BASES DE DATOS AVANZADAS",
            "code": "780020"
        }, {
            "name": "GESTIÓN DE PROYECTOS",
            "code": "780022"
        }, {
            "name": "INGENIERÍA DEL SOFTWARE AVANZADA",
            "code": "780019"
        }, {
            "name": "PROCESADORES DEL LENGUAJE",
            "code": "780018"
        }, {
            "name": "AMPLIACIÓN DE PROGRAMACIÓN AVANZADA",
            "code": "780026"
        }, {
            "name": "CONOCIMIENTO Y RAZONAMIENTO AUTOMATIZADO",
            "code": "780025"
        }, {
            "name": "GESTIÓN DE PROYECTOS",
            "code": "780022"
        }, {
            "name": "INTELIGENCIA ARTIFICIAL",
            "code": "780024"
        }, {
            "name": "SISTEMAS EMPRESARIALES",
            "code": "780023"
        }, {
            "name": "TRABAJO FIN DE GRADO",
            "code": "780028"
        }, {
            "name": "PRÁCTICAS EXTERNAS",
            "code": "780027"
        }, {
            "name": "APLICACIONES DEL SOFT-COMPUTING EN ENERGÍA, VOZ E IMAGEN",
            "code": "780034"
        }, {
            "name": "ARQUITECTURA Y DISEÑO DE SISTEMAS WEB Y C/S",
            "code": "780041"
        }, {
            "name": "EXTRACCIÓN AUTOMÁTICA DEL CONOCIMIENTO",
            "code": "780039"
        }, {
            "name": "PATRONES SOFTWARE",
            "code": "780042"
        }, {
            "name": "PRESENTACIONES EFICACES Y NEGOCIACIÓN",
            "code": "780035"
        }, {
            "name": "SEGURIDAD",
            "code": "780036"
        }, {
            "name": "SISTEMAS AUDIOVISUALES Y APLICACIONES MULTIMEDIA",
            "code": "780033"
        }, {
            "name": "SISTEMAS DE INFORMACIÓN PARA LA GESTIÓN DE COSTES",
            "code": "580019"
        }, {
            "name": "SISTEMAS DE VISIÓN ARTIFICIAL",
            "code": "780029"
        }, {
            "name": "TECNOLOGÍAS Y SERVICIOS DE RED",
            "code": "780045"
        }, {
            "name": "APLICACIÓN DE LOS SISTEMAS DE CONTROL",
            "code": "780031"
        }, {
            "name": "ADMINISTRACIÓN Y MANTENIMIENTO DE SISTEMAS OPERATIVOS",
            "code": "780046"
        }, {
            "name": "APLICACIÓN DE LOS SISTEMAS DE CONTROL",
            "code": "780031"
        }, {
            "name": "BIOINGENIERÍA",
            "code": "780030"
        }, {
            "name": "CALIDAD, PRUEBAS Y MANTENIMIENTO DEL SOFTWARE",
            "code": "780043"
        }, {
            "name": "FUNDAMENTOS DEL COMERCIO ELECTRÓNICO",
            "code": "580017"
        }, {
            "name": "GESTIÓN DE REDES",
            "code": "780044"
        }, {
            "name": "MODELOS AVANZADOS DE BASES DE DATOS",
            "code": "780047"
        }, {
            "name": "TÉCNICAS DE DISEÑO APLICADO A SISTEMAS DE SUPERVISIÓN Y ENTRENAMIENTO REMOTO",
            "code": "780032"
        }]
    }, {
        "name": "Grado en Sistemas de Información",
        "code": "G58",
        "school_code": "210",
        "school": "",
        "asignaturas": [{
            "name": "ESTADÍSTICA",
            "code": "780004"
        }, {
            "name": "FUNDAMENTOS DE PROGRAMACIÓN",
            "code": "780003"
        }, {
            "name": "FUNDAMENTOS DE TECNOLOGÍA DE COMPUTADORES",
            "code": "780002"
        }, {
            "name": "FUNDAMENTOS MATEMÁTICOS",
            "code": "780001"
        }, {
            "name": "GESTIÓN DE PERSONAS Y EQUIPOS",
            "code": "580001"
        }, {
            "name": "FUNDAMENTOS DE LA EMPRESA",
            "code": "780006"
        }, {
            "name": "PROGRAMACIÓN",
            "code": "780005"
        }, {
            "name": "SISTEMAS OPERATIVOS",
            "code": "580000"
        }, {
            "name": "ESTRUCTURAS DE DATOS",
            "code": "780009"
        }, {
            "name": "FUNDAMENTOS DE LOS SISTEMAS DE INFORMACIÓN",
            "code": "580002"
        }, {
            "name": "MARKETING TIC",
            "code": "580006"
        }, {
            "name": "SISTEMAS DE INFORMACIÓN CONTABLE",
            "code": "580004"
        }, {
            "name": "ANÁLISIS Y VALORACIÓN DE PROYECTOS DE INVERSIÓN",
            "code": "580005"
        }, {
            "name": "BASES DE DATOS",
            "code": "780016"
        }, {
            "name": "INGENIERÍA DEL SOFTWARE",
            "code": "780015"
        }, {
            "name": "REDES",
            "code": "580003"
        }, {
            "name": "TIC EN LA EMPRESA",
            "code": "580007"
        }, {
            "name": "BASES DE DATOS AVANZADAS",
            "code": "780020"
        }, {
            "name": "GESTIÓN DE PROYECTOS",
            "code": "780022"
        }, {
            "name": "INGENIERÍA DEL SOFTWARE AVANZADA",
            "code": "780019"
        }, {
            "name": "SISTEMAS DE INFORMACIÓN DE APOYO A PROCESOS Y TOMA DE DECISIONES",
            "code": "580012"
        }, {
            "name": "DESARROLLO CON TECNOLOGÍAS EMERGENTES",
            "code": "580011"
        }, {
            "name": "GESTIÓN DE PROYECTOS",
            "code": "780022"
        }, {
            "name": "MODELOS DE TECNOLOGÍAS PARA LOS SISTEMAS DE INFORMACIÓN",
            "code": "580008"
        }, {
            "name": "ORGANIZACIÓN DE LA INFORMACIÓN Y PROYECTOS",
            "code": "580009"
        }, {
            "name": "SISTEMAS EMPRESARIALES",
            "code": "580010"
        }, {
            "name": "TRABAJO FIN DE GRADO",
            "code": "580014"
        }, {
            "name": "APLICACIONES DEL SOFT-COMPUTING EN ENERGÍA, VOZ E IMAGEN",
            "code": "780034"
        }, {
            "name": "ARQUITECTURA Y DISEÑO DE SISTEMAS WEB Y C/S",
            "code": "780041"
        }, {
            "name": "COMPUTACIÓN UBICUA",
            "code": "580016"
        }, {
            "name": "EXTRACCIÓN AUTOMÁTICA DEL CONOCIMIENTO",
            "code": "780039"
        }, {
            "name": "PRESENTACIONES EFICACES Y NEGOCIACIÓN",
            "code": "780035"
        }, {
            "name": "SISTEMAS AUDIOVISUALES Y APLICACIONES MULTIMEDIA",
            "code": "780033"
        }, {
            "name": "SISTEMAS DE INFORMACIÓN PARA LA GESTIÓN DE COSTES",
            "code": "580019"
        }, {
            "name": "SISTEMAS DE VISIÓN ARTIFICIAL",
            "code": "780029"
        }, {
            "name": "APLICACIÓN DE LOS SISTEMAS DE CONTROL",
            "code": "780031"
        }, {
            "name": "BIOINGENIERÍA",
            "code": "780030"
        }, {
            "name": "EL LÍDER-COACH: CLAVES PARA EL DESARROLLO DE LAS HABILIDADES DE LIDERAZGO",
            "code": "580018"
        }, {
            "name": "FUNDAMENTOS DEL COMERCIO ELECTRÓNICO",
            "code": "580017"
        }, {
            "name": "SEGURIDAD EN SISTEMAS DISTRIBUIDOS",
            "code": "580015"
        }, {
            "name": "TÉCNICAS DE DISEÑO APLICADO A SISTEMAS DE SUPERVISIÓN Y ENTRENAMIENTO REMOTO",
            "code": "780032"
        }, {
            "name": "PRÁCTICAS EXTERNAS",
            "code": "580013"
        }, {
            "name": "EL EMPRENDIMIENTO: DE LA IDEA A LA REALIDAD",
            "code": "340065"
        }]
    }, {
        "name": "Grado en Ingeniería de Computadores",
        "code": "G59",
        "school_code": "210",
        "school": "",
        "asignaturas": [{
            "name": "ESTADÍSTICA",
            "code": "780004"
        }, {
            "name": "FÍSICA",
            "code": "780000"
        }, {
            "name": "FUNDAMENTOS DE PROGRAMACIÓN",
            "code": "780003"
        }, {
            "name": "FUNDAMENTOS DE TECNOLOGÍA DE COMPUTADORES",
            "code": "780002"
        }, {
            "name": "FUNDAMENTOS MATEMÁTICOS",
            "code": "780001"
        }, {
            "name": "DESARROLLO DEL SOFTWARE",
            "code": "590000"
        }, {
            "name": "ESTRUCTURAS DISCRETAS",
            "code": "780008"
        }, {
            "name": "GESTIÓN EMPRESARIAL",
            "code": "590001"
        }, {
            "name": "SISTEMAS OPERATIVOS",
            "code": "780007"
        }, {
            "name": "ARQUITECTURA DE REDES",
            "code": "780011"
        }, {
            "name": "ESTRUCTURA Y ORGANIZACIÓN DE COMPUTADORES",
            "code": "780010"
        }, {
            "name": "ESTRUCTURAS DE DATOS",
            "code": "780009"
        }, {
            "name": "MATEMÁTICAS AVANZADAS",
            "code": "590002"
        }, {
            "name": "SISTEMAS OPERATIVOS AVANZADOS",
            "code": "780012"
        }, {
            "name": "ANÁLISIS DE CIRCUITOS",
            "code": "590003"
        }, {
            "name": "BASES DE DATOS",
            "code": "780016"
        }, {
            "name": "INGENIERÍA DEL SOFTWARE",
            "code": "780015"
        }, {
            "name": "PROGRAMACIÓN AVANZADA",
            "code": "780014"
        }, {
            "name": "REDES DE COMPUTADORES",
            "code": "780017"
        }, {
            "name": "ARQUITECTURA E INGENIERÍA DE COMPUTADORES",
            "code": "590005"
        }, {
            "name": "ELECTRÓNICA",
            "code": "590006"
        }, {
            "name": "GESTIÓN DE PROYECTOS",
            "code": "780022"
        }, {
            "name": "PROCESADORES DEL LENGUAJE",
            "code": "780018"
        }, {
            "name": "SEÑALES Y SISTEMAS",
            "code": "590004"
        }, {
            "name": "GESTIÓN DE PROYECTOS",
            "code": "780022"
        }, {
            "name": "MODELADO Y SÍNTESIS DE SISTEMAS ELECTRONICOS DIGITALES",
            "code": "590009"
        }, {
            "name": "PERCEPCIÓN Y CONTROL",
            "code": "590007"
        }, {
            "name": "SISTEMAS EMPOTRADOS",
            "code": "590010"
        }, {
            "name": "SISTEMAS EN TIEMPO REAL",
            "code": "590008"
        }, {
            "name": "TRABAJO FIN DE GRADO",
            "code": "590012"
        }, {
            "name": "PRÁCTICAS EXTERNAS",
            "code": "590011"
        }, {
            "name": "APLICACIONES DEL SOFT-COMPUTING EN ENERGÍA, VOZ E IMAGEN",
            "code": "780034"
        }, {
            "name": "ARQUITECTURA Y DISEÑO DE SISTEMAS WEB Y C/S",
            "code": "780041"
        }, {
            "name": "COMPUTACIÓN UBICUA",
            "code": "580016"
        }, {
            "name": "EXTRACCIÓN AUTOMÁTICA DEL CONOCIMIENTO",
            "code": "780039"
        }, {
            "name": "PRESENTACIONES EFICACES Y NEGOCIACIÓN",
            "code": "780035"
        }, {
            "name": "SISTEMAS AUDIOVISUALES Y APLICACIONES MULTIMEDIA",
            "code": "780033"
        }, {
            "name": "SISTEMAS DE INFORMACIÓN PARA LA GESTIÓN DE COSTES",
            "code": "580019"
        }, {
            "name": "SISTEMAS DE VISIÓN ARTIFICIAL",
            "code": "780029"
        }, {
            "name": "APLICACIÓN DE LOS SISTEMAS DE CONTROL",
            "code": "780031"
        }, {
            "name": "BIOINGENIERÍA",
            "code": "780030"
        }, {
            "name": "FUNDAMENTOS DEL COMERCIO ELECTRÓNICO",
            "code": "580017"
        }, {
            "name": "SEGURIDAD EN SISTEMAS DISTRIBUIDOS",
            "code": "580015"
        }, {
            "name": "TÉCNICAS DE DISEÑO APLICADO A SISTEMAS DE SUPERVISIÓN Y ENTRENAMIENTO REMOTO",
            "code": "780032"
        }, {
            "name": "COMPUTACIÓN DE ALTAS PRESTACIONES",
            "code": "590016"
        }, {
            "name": "SISTEMAS DE CONTROL INTELIGENTE",
            "code": "590014"
        }, {
            "name": "SISTEMAS DE CONTROL PARA ROBOTS",
            "code": "590015"
        }, {
            "name": "TRATAMIENTO DIGITAL DE SEÑALES",
            "code": "590017"
        }]
    }, {
        "name": "Grado en Medicina",
        "code": "G215",
        "school_code": "101",
        "school": "",
        "asignaturas": [{
            "name": "ANATOMÍA HUMANA I",
            "code": "215000"
        }, {
            "name": "BIOLOGÍA:CITOLOGÍA Y CITOGENÉTICA MÉDICAS",
            "code": "215001"
        }, {
            "name": "BIOQUÍMICA",
            "code": "215002"
        }, {
            "name": "HUMANIDADES MÉDICAS:HISTORIA DE LA MEDICINA Y ANTROPOLOGÍA MÉDICA",
            "code": "215003"
        }, {
            "name": "PSICOLOGÍA MÉDICA",
            "code": "215004"
        }, {
            "name": "BIOESTADÍSTICA",
            "code": "215005"
        }, {
            "name": "BIOQUÍMICA MÉDICA Y BIOLOGÍA MOLECULAR",
            "code": "215006"
        }, {
            "name": "EMBRIOLOGÍA MÉDICA",
            "code": "215007"
        }, {
            "name": "ÉTICA MÉDICA",
            "code": "215008"
        }, {
            "name": "HISTOLOGÍA HUMANA",
            "code": "215009"
        }, {
            "name": "ANATOMÍA HUMANA II",
            "code": "215010"
        }, {
            "name": "EPIDEMIOLOGÍA",
            "code": "215011"
        }, {
            "name": "FISIOLOGÍA HUMANA I",
            "code": "215012"
        }, {
            "name": "INICIACIÓN A LA INVESTIGACIÓN, DOCUMENTACIÓN CIENTÍFICA Y TICS",
            "code": "215013"
        }, {
            "name": "ORGANOGRAFÍA E INGENIERÍA TISULAR HUMANAS",
            "code": "215014"
        }, {
            "name": "ANATOMÍA HUMANA II",
            "code": "215010"
        }, {
            "name": "FISIOLOGÍA HUMANA II",
            "code": "215015"
        }, {
            "name": "INMUNOLOGÍA",
            "code": "215016"
        }, {
            "name": "RADIOLOGÍA GENERAL",
            "code": "215017"
        }, {
            "name": "FARMACOLOGÍA",
            "code": "215018"
        }, {
            "name": "MICROBIOLOGÍA MÉDICA",
            "code": "215019"
        }, {
            "name": "PATOLOGÍA GENERAL",
            "code": "215020"
        }, {
            "name": "ANATOMÍA PATOLÓGICA GENERAL",
            "code": "215021"
        }, {
            "name": "RADIOLOGÍA CLÍNICA Y DIAGNÓSTICO POR LA IMAGEN",
            "code": "215022"
        }, {
            "name": "FUNDAMENTOS Y PROCEDIMIENTOS QUIRÚRGICOS",
            "code": "215023"
        }, {
            "name": "PATOLOGÍA MÉDICA I",
            "code": "215024"
        }, {
            "name": "MEDICINA LEGAL Y FORENSE.CRIMINOLOGÍA MÉDICA",
            "code": "215030"
        }, {
            "name": "OBSTETRICIA",
            "code": "215026"
        }, {
            "name": "PATOLOGÍA POR APARATOS Y SISTEMAS:ASPECTOS QUIRÚRGICOS Y ANESTESIA",
            "code": "215027"
        }, {
            "name": "PEDIATRÍA",
            "code": "215031"
        }, {
            "name": "ANATOMÍA PATOLÓGICA ESPECIAL",
            "code": "215029"
        }, {
            "name": "DERMATOLOGÍA",
            "code": "215025"
        }, {
            "name": "MEDICINA LEGAL Y FORENSE.CRIMINOLOGÍA MÉDICA",
            "code": "215030"
        }, {
            "name": "UROLOGÍA",
            "code": "215028"
        }, {
            "name": "PATOLOGÍA MÉDICA II",
            "code": "215032"
        }, {
            "name": "OFTALMOLOGÍA",
            "code": "215039"
        }, {
            "name": "OTORRINOLARINGOLOGÍA",
            "code": "215034"
        }, {
            "name": "TÉCNICAS DE COMUNICACIÓN EN MEDICINA CLÍNICA",
            "code": "215035"
        }, {
            "name": "TRAUMATOLOGÍA Y ORTOPEDIA.MEDICINA FÍSICA Y REHABILITACIÓN",
            "code": "215036"
        }, {
            "name": "ATENCIÓN  MÉDICA EN ENTORNOS ESPECÍFICOS:ATENCIÓN PRIMARIA Y URGENCIAS",
            "code": "215037"
        }, {
            "name": "GINECOLOGÍA",
            "code": "215033"
        }, {
            "name": "MEDICINA PREVENTIVA Y SALUD PÚBLICA",
            "code": "215038"
        }, {
            "name": "PSIQUIATRÍA",
            "code": "215040"
        }]
    }, {
        "name": "Grado Ciencias Actividad Física y del Deporte",
        "code": "G770",
        "school_code": "101",
        "school": "",
        "asignaturas": [{
            "name": "ANATOMÍA HUMANA",
            "code": "770000"
        }, {
            "name": "FUNDAMENTOS DE LOS DEPORTES:BALONCESTO Y BALONMANO",
            "code": "770001"
        }, {
            "name": "FUNDAMENTOS DEL ATLETISMO",
            "code": "770002"
        }, {
            "name": "INTERVENCIÓN DOCENTE EN LA ACTIVIDAD FÍSICA Y EL DEPORTE",
            "code": "770003"
        }, {
            "name": "TEORÍA E HISTORIA DEL DEPORTE",
            "code": "770004"
        }, {
            "name": "FISIOLOGÍA HUMANA",
            "code": "770005"
        }, {
            "name": "FUNDAMENTOS DE LAS ACTIVIDADES GIMNÁSTICAS",
            "code": "770006"
        }, {
            "name": "FUNDAMENTOS DE LOS DEPORTES DE LUCHA",
            "code": "770007"
        }, {
            "name": "PSICOLOGÍA DE LA ACTIVIDAD FÍSICA Y DEL DEPORTE",
            "code": "770008"
        }, {
            "name": "BIOMECÁNICA HUMANA",
            "code": "770009"
        }, {
            "name": "DESARROLLO,CONTROL Y APRENDIZAJE MOTOR",
            "code": "770010"
        }, {
            "name": "FISIOLOGÍA DEL EJERCICIO Y BASES DEL ENTRENAMIENTO DEPORTIVO",
            "code": "770011"
        }, {
            "name": "FUNDAMENTOS DE LAS ACTIVIDADES ACUÁTICAS",
            "code": "770012"
        }, {
            "name": "FUNDAMENTOS DE LOS DEPORTES: FÚTBOL Y VOLEIBOL",
            "code": "770018"
        }, {
            "name": "SOCIOLOGÍA DE LA ACTIVIDAD FÍSICA Y EL DEPORTE",
            "code": "770013"
        }, {
            "name": "ACTIVIDADES FÍSICAS EN EL MEDIO NATURAL",
            "code": "770014"
        }, {
            "name": "ESTRUCTURA Y ORGANIZACIÓN DE LAS INSTITUCIONES DEPORTIVAS",
            "code": "770015"
        }, {
            "name": "EXPRESIÓN CORPORAL Y DANZA",
            "code": "770016"
        }, {
            "name": "FUNDAMENTOS DE LOS DEPORTES DE RAQUETA",
            "code": "770017"
        }, {
            "name": "FUNDAMENTOS DE LOS DEPORTES: FÚTBOL Y VOLEIBOL",
            "code": "770018"
        }, {
            "name": "ACTIVIDAD FÍSICA Y SALUD",
            "code": "770019"
        }, {
            "name": "DEPORTE Y RECREACIÓN",
            "code": "770020"
        }, {
            "name": "EDUCACIÓN FÍSICA DE BASE Y JUEGO MOTOR",
            "code": "770021"
        }, {
            "name": "ENSEÑANZA DE LA ACTIVIDAD FÍSICA Y EL DEPORTE I",
            "code": "770022"
        }, {
            "name": "SISTEMAS DE ENTRENAMIENTO DEPORTIVO",
            "code": "770023"
        }, {
            "name": "ACTIVIDAD FÍSICA PARA POBLACIONES ESPECIALES",
            "code": "770024"
        }, {
            "name": "ENSEÑANZA DE LA ACTIVIDAD FÍSICA Y EL DEPORTE II",
            "code": "770025"
        }, {
            "name": "INICIACIÓN A LA INVESTIGACIÓN EN CIENCIAS DE LA ACTIVIDAD FÍSICA Y DEL DEPORTE",
            "code": "770026"
        }, {
            "name": "NUTRICIÓN EN EL DEPORTE",
            "code": "770027"
        }, {
            "name": "PRÁCTICUM",
            "code": "770031"
        }, {
            "name": "MARCO LEGAL DEL PROFESIONAL DE LA ACTIVIDAD FÍSICA Y DEL DEPORTE",
            "code": "770028"
        }, {
            "name": "PLANIFICACIÓN Y CONTROL DEL ENTRENAMIENTO DEPORTIVO",
            "code": "770029"
        }, {
            "name": "PLANIFICACIÓN Y GESTIÓN DE LA ACTIVIDAD FÍSICA Y DEL DEPORTE",
            "code": "770030"
        }, {
            "name": "TRABAJO FIN DE GRADO",
            "code": "770032"
        }, {
            "name": "TRABAJO FIN DE GRADO (2ª MATRÍCULA)",
            "code": "770050"
        }, {
            "name": "ACTIVIDAD FÍSICA Y TERCERA EDAD",
            "code": "770035"
        }, {
            "name": "ACTIVIDADES FÍSICAS PARA PERSONAS CON DISCAPACIDAD",
            "code": "770042"
        }, {
            "name": "DEPORTE ESCOLAR",
            "code": "770048"
        }, {
            "name": "DIRECCIÓN DE ORGANIZACIÓN DEPORTIVA MUNICIPAL Y SUS RECURSOS",
            "code": "770036"
        }, {
            "name": "DIRECCIÓN DE ORGANIZACIONES DEPORTIVAS PRIVADAS",
            "code": "770041"
        }, {
            "name": "EL CURRICULUM DE LA E.F. EN EL SISTEMA EDUCATIVO",
            "code": "770033"
        }, {
            "name": "ESPECIALIZACIÓN DEPORTIVA EN ATLETISMO",
            "code": "770037"
        }, {
            "name": "ESPECIALIZACIÓN DEPORTIVA EN BALONCESTO",
            "code": "770044"
        }, {
            "name": "ESPECIALIZACIÓN DEPORTIVA EN BALONMANO",
            "code": "770045"
        }, {
            "name": "ESPECIALIZACIÓN DEPORTIVA EN FÚTBOL",
            "code": "770046"
        }, {
            "name": "ESPECIALIZACIÓN DEPORTIVA EN VOLEIBOL",
            "code": "770047"
        }, {
            "name": "EVALUACIÓN EN LA ENSEÑANZA DE LA ACTIVIDAD FÍSICA Y EL DEPORTE",
            "code": "770038"
        }, {
            "name": "INNOVACIÓN EDUCATIVA EN LA ENSEÑANZA DE LA EDUCACIÓN FISICA Y EL DEPORTE",
            "code": "770039"
        }, {
            "name": "ORGANIZACIÓN DE EVENTOS Y COMPETICIONES DEPORTIVAS",
            "code": "770049"
        }, {
            "name": "ORGANIZACIÓN DE SERVICIOS DE ACTIVIDAD FÍSICA PARA PERSONAS MAYORES",
            "code": "770040"
        }, {
            "name": "READAPTACIÓN FÍSICA-DEPORTIVA",
            "code": "770043"
        }, {
            "name": "VALORACIÓN FUNCIONAL DEL MOVIMIENTO HUMANO EN EL DEPORTE",
            "code": "770034"
        }]
    }, {
        "name": "Licenciado en Medicina",
        "code": "215",
        "school_code": "101",
        "school": "",
        "asignaturas": [{
            "name": "BIOQUÍMICA",
            "code": "32862"
        }, {
            "name": "EPIDEMIOLOGÍA GENERAL Y DEMOGRAFÍA SANITARIA",
            "code": "32853"
        }, {
            "name": "INMUNOLOGÍA",
            "code": "32851"
        }, {
            "name": "FARMACOLOGÍA",
            "code": "32857"
        }, {
            "name": "MICROBIOLOGÍA MÉDICA",
            "code": "32858"
        }, {
            "name": "PATOLOGÍA GENERAL",
            "code": "32859"
        }, {
            "name": "DERMATOLOGÍA",
            "code": "32869"
        }, {
            "name": "OBSTETRICIA Y GINECOLOGÍA I",
            "code": "32880"
        }, {
            "name": "PATOLOGÍA MÉDICA I",
            "code": "32867"
        }, {
            "name": "PATOLOGÍA QUIRÚRGICA I",
            "code": "32868"
        }, {
            "name": "PEDIATRÍA",
            "code": "32882"
        }, {
            "name": "RADIOLOGÍA CLÍNICA",
            "code": "32876"
        }, {
            "name": "MEDICINA FÍSICA Y REHABILITACIÓN",
            "code": "32879"
        }, {
            "name": "OBSTETRICIA Y GINECOLOGÍA II",
            "code": "32881"
        }, {
            "name": "OFTALMOLOGÍA",
            "code": "32873"
        }, {
            "name": "OTORRINOLARINGOLOGÍA",
            "code": "32872"
        }, {
            "name": "PATOLOGÍA MÉDICA II",
            "code": "32870"
        }, {
            "name": "PATOLOGÍA QUIRÚRGICA II",
            "code": "32871"
        }, {
            "name": "PSIQUIATRÍA",
            "code": "32884"
        }, {
            "name": "FARMACOLOGÍA CLÍNICA",
            "code": "32878"
        }, {
            "name": "MEDICINA LEGAL Y TOXICOLOGÍA, DEONTOLOGÍA Y LEGISLACIÓN MÉDICA",
            "code": "32865"
        }, {
            "name": "MEDICINA PREVENTIVA Y SALUD PÚBLICA Y COMUNITARIA",
            "code": "32866"
        }, {
            "name": "MICROBIOLOGÍA CLÍNICA",
            "code": "32877"
        }, {
            "name": "CLÍNICA MÉDICA",
            "code": "32874"
        }, {
            "name": "CLÍNICA OBSTÉTRICA Y GINECOLÓGICA",
            "code": "32964"
        }, {
            "name": "CLÍNICA PEDIÁTRICA",
            "code": "32883"
        }, {
            "name": "CLÍNICA PSIQUIÁTRICA",
            "code": "32963"
        }, {
            "name": "CLÍNICA QUIRÚRGICA",
            "code": "32875"
        }, {
            "name": "BIOÉTICA",
            "code": "32975"
        }, {
            "name": "GENÉTICA MÉDICA",
            "code": "32966"
        }, {
            "name": "GENÉTICA DE LAS ENFERMEDADES SISTÉMICAS",
            "code": "32967"
        }]
    }, {
        "name": "Lic. Ciencias Actividad Física y del Deporte",
        "code": "770",
        "school_code": "101",
        "school": "",
        "asignaturas": [{
            "name": "DEPORTE Y RECREACIÓN",
            "code": "77201"
        }, {
            "name": "DIDÁCTICA DE LA ACTIVIDAD FÍSICA Y DEL DEPORTE I",
            "code": "77207"
        }, {
            "name": "EDUCACIÓN FÍSICA Y SALUD",
            "code": "77200"
        }, {
            "name": "ESTRUCTURA Y ORGANIZACIÓN DE LAS INSTITUCIONES DEPORTIVAS",
            "code": "77202"
        }, {
            "name": "LA EXPRESION CORPORAL EN LA EDUCACION SECUNDARIA",
            "code": "77208"
        }, {
            "name": "NUEVAS TENDENCIAS EN LA ACTIVIDAD FÍSICA",
            "code": "77209"
        }, {
            "name": "PLANIFICACIÓN Y GESTIÓN DE LA ACTIVIDAD FÍSICA Y DEL DEPORTE I",
            "code": "77204"
        }, {
            "name": "PLANIFICACIÓN Y GESTIÓN DE LA ACTIVIDAD FÍSICA Y DEL DEPORTE II",
            "code": "77205"
        }, {
            "name": "PSICOLOGÍA DEL RENDIMIENTO DEPORTIVO",
            "code": "77206"
        }, {
            "name": "SISTEMAS DE ENTRENAMIENTO DEPORTIVO I",
            "code": "77203"
        }, {
            "name": "ACTIVIDAD FÍSICA PARA POBLACIONES ESPECIALES",
            "code": "77221"
        }, {
            "name": "ACTIVIDADES EN EL MEDIO NATURAL",
            "code": "77223"
        }, {
            "name": "LA EMPRESA DEPORTIVA",
            "code": "77227"
        }, {
            "name": "SISTEMAS DE ENTRENAMIENTO DEPORTIVO II",
            "code": "77220"
        }, {
            "name": "SOCIEDAD, DEPORTE Y EDUCACIÓN",
            "code": "77225"
        }, {
            "name": "TECNOLOGIA Y ACTIVIDAD FISICA",
            "code": "77226"
        }, {
            "name": "DIDÁCTICA DE LA ACTIVIDAD FÍSICA Y DEL DEPORTE II",
            "code": "77222"
        }, {
            "name": "PRÁCTICUM",
            "code": "77224"
        }, {
            "name": "ACTIVIDADES FÍSICAS PARA PERSONAS CON DISCAPACIDAD",
            "code": "77300"
        }, {
            "name": "EVALUACIÓN EN LA ACTIVIDAD FÍSICA Y EL DEPORTE",
            "code": "77303"
        }, {
            "name": "MARCO LEGAL DEL PROFESIONAL DE LA ACTIVIDAD FÍSICA Y EL DEPORTE",
            "code": "77304"
        }, {
            "name": "SEMINARIO EN GESTIÓN DE ACTIVIDADES DEPORTIVAS",
            "code": "77308"
        }, {
            "name": "SEMINARIO SOBRE ENSEÑANZA DE LA EDUCACION FISICA",
            "code": "77309"
        }, {
            "name": "PRÁCTICUM EN GESTIÓN DEPORTIVA",
            "code": "77305"
        }, {
            "name": "PRÁCTICUM EN PLANIFICACIÓN Y ORGANIZACIÓN DE ACTIVIDADES DEPORTIVO-RECREATIVAS PARA POBLACIONES ESP.",
            "code": "77306"
        }]
    }, {
        "name": "Grado en Enfermería",
        "code": "G209",
        "school_code": "205",
        "school": "",
        "asignaturas": [{
            "name": "ANATOMÍA Y BIOLOGÍA HUMANA",
            "code": "209000"
        }, {
            "name": "BIOQUÍMICA",
            "code": "209001"
        }, {
            "name": "CIENCIAS PSICOSOCIALES APLICADAS Y COMUNICACIÓN",
            "code": "209003"
        }, {
            "name": "FISIOLOGÍA HUMANA",
            "code": "209002"
        }, {
            "name": "ESTADÍSTICA E INTRODUCCIÓN A LA INVESTIGACIÓN EN ENFERMERÍA",
            "code": "209004"
        }, {
            "name": "FISIOPATOLOGÍA",
            "code": "209005"
        }, {
            "name": "FUNDAMENTOS TEÓRICOS Y METODOLÓGICOS DE LA ENFERMERÍA",
            "code": "209006"
        }, {
            "name": "CUIDADOS BÁSICOS PARA LA SALUD DE LA PERSONA, LA FAMILIA Y EL GRUPO",
            "code": "209009"
        }, {
            "name": "FARMACOLOGÍA",
            "code": "209007"
        }, {
            "name": "NUTRICIÓN Y DIETÉTICA",
            "code": "209008"
        }, {
            "name": "PRÁCTICAS CLÍNICAS I",
            "code": "209011"
        }, {
            "name": "PROCESOS GENERALES EN ENFERMERÍA CLÍNICA",
            "code": "209010"
        }, {
            "name": "ENFERMERÍA CLÍNICA EN LA EDAD ADULTA. SITUACIONES AGUDAS Y DE EMERGENCIA",
            "code": "209013"
        }, {
            "name": "PRÁCTICAS CLÍNICAS II",
            "code": "209012"
        }, {
            "name": "SALUD COMUNITARIA Y ORGANIZACIÓN ENFERMERA EN LA COMUNIDAD",
            "code": "209014"
        }, {
            "name": "ATENCIÓN ENFERMERA AL DESARROLLO HUMANO CON UNA PERSPECTIVA DE GÉNERO",
            "code": "209016"
        }, {
            "name": "ENFERMERÍA CLÍNICA EN LA INFANCIA, ADOLESCENCIA Y ENVEJECIMIENTO",
            "code": "209015"
        }, {
            "name": "GESTIÓN DE SERVICIOS ENFERMEROS: LEGISLACIÓN Y DEONTOLOGÍA PROFESIONAL",
            "code": "209017"
        }, {
            "name": "ENFERMERÍA CLÍNICA EN LA EDAD ADULTA. PROCESOS CRÓNICOS, AVANZADOS Y TERMINALES",
            "code": "209019"
        }, {
            "name": "INSTRUMENTOS DEL CUIDADO ENFERMERO CON LA COMUNIDAD",
            "code": "209020"
        }, {
            "name": "PRACTICUM GENERAL I",
            "code": "209018"
        }, {
            "name": "PRACTICUM GENERAL II",
            "code": "209021"
        }, {
            "name": "PRACTICUM GENERAL II (1ª PARTE)",
            "code": "209039"
        }, {
            "name": "PRACTICUM ESPECÍFICO",
            "code": "209022"
        }, {
            "name": "TRABAJO FIN DE GRADO",
            "code": "209023"
        }, {
            "name": "CALIDAD EN LOS SERVICIOS SOCIOSANITARIOS",
            "code": "209036"
        }, {
            "name": "RELACIONES DE AYUDA MUTUA",
            "code": "209035"
        }]
    }, {
        "name": "Grado en Fisioterapia",
        "code": "G249",
        "school_code": "205",
        "school": "",
        "asignaturas": [{
            "name": "ANATOMÍA E HISTOLOGÍA HUMANA",
            "code": "249000"
        }, {
            "name": "FISIOLOGÍA HUMANA",
            "code": "249001"
        }, {
            "name": "BASES TEÓRICAS DE LA APLICACIÓN DE LOS AGENTES FÍSICOS EN FISIOTERAPIA",
            "code": "249003"
        }, {
            "name": "BIOQUÍMICA",
            "code": "249002"
        }, {
            "name": "CINESIOLOGÍA I",
            "code": "249004"
        }, {
            "name": "FISIOPATOLOGÍA",
            "code": "249006"
        }, {
            "name": "PSICOLOGÍA",
            "code": "249005"
        }, {
            "name": "CINESIOLOGÍA II",
            "code": "249010"
        }, {
            "name": "FUNDAMENTOS DE FISIOTERAPIA",
            "code": "249007"
        }, {
            "name": "PROCEDIMIENTOS GENERALES DE INTERVENCIÓN EN FISIOTERAPIA I",
            "code": "249009"
        }, {
            "name": "VALORACIÓN EN FISIOTERAPIA",
            "code": "249008"
        }, {
            "name": "AFECCIONES MÉDICO-QUIRÚRGICAS",
            "code": "249012"
        }, {
            "name": "FISIOTERAPIA EN ESPECIALIDADES CLÍNICAS I",
            "code": "249013"
        }, {
            "name": "MÉTODOS ESPECÍFICOS DE INTERVENCIÓN EN FISIOTERAPIA I",
            "code": "249014"
        }, {
            "name": "PROCEDIMIENTOS GENERALES DE INTERVENCIÓN EN FISIOTERAPIA II",
            "code": "249011"
        }, {
            "name": "FISIOTERAPIA EN ESPECIALIDADES CLÍNICAS II",
            "code": "249016"
        }, {
            "name": "MÉTODOS ESPECÍFICOS DE INTERVENCIÓN EN FISIOTERAPIA II",
            "code": "249015"
        }, {
            "name": "LEGISLACIÓN, SALUD PÚBLICA Y ADMINISTRACIÓN SANITARIA",
            "code": "249017"
        }, {
            "name": "ESTANCIAS CLÍNICAS TUTELADAS I",
            "code": "249020"
        }, {
            "name": "FISIOTERAPIA EN ESPECIALIDADES CLÍNICAS III",
            "code": "249019"
        }, {
            "name": "MÉTODOS ESPECÍFICOS DE INTERVENCIÓN EN FISIOTERAPIA III",
            "code": "249018"
        }, {
            "name": "ESTANCIAS CLÍNICAS TUTELADAS II",
            "code": "249021"
        }, {
            "name": "TRABAJO FIN DE GRADO",
            "code": "249022"
        }, {
            "name": "FISIOTERAPIA EN LOS PROCESOS GINECOLÓGICOS Y OBSTRÉTICOS DE LA MUJER",
            "code": "249028"
        }, {
            "name": "FISIOTERAPIA Y SALUD EN LAS DISTINTAS ETAPAS DE LA VIDA",
            "code": "249029"
        }, {
            "name": "FARMACOLOGÍA EN FISIOTERAPIA",
            "code": "249025"
        }, {
            "name": "FISIOTERAPIA DEL DEPORTE",
            "code": "249023"
        }, {
            "name": "FISIOTERAPIA EN LOS PROCESOS ONCOLÓGICOS DE LA MUJER",
            "code": "249024"
        }, {
            "name": "PLANIFICACIÓN DE SERVICIOS DE FISIOTERAPIA",
            "code": "249030"
        }]
    }, {
        "name": "Grado en Ciencias Ambientales",
        "code": "G670",
        "school_code": "107",
        "school": "",
        "asignaturas": [{
            "name": "BIOQUÍMICA",
            "code": "670000"
        }, {
            "name": "MATEMÁTICAS",
            "code": "670001"
        }, {
            "name": "POBLACIÓN, TERRITORIO Y MEDIOAMBIENTE",
            "code": "670002"
        }, {
            "name": "QUÍMICA",
            "code": "670003"
        }, {
            "name": "FÍSICA",
            "code": "670004"
        }, {
            "name": "GEOLOGÍA",
            "code": "670005"
        }, {
            "name": "MICROBIOLOGÍA",
            "code": "670006"
        }, {
            "name": "TECNOLOGÍAS DE LA INFORMACIÓN GEOGRÁFICA",
            "code": "670007"
        }, {
            "name": "ADMINISTRACIÓN Y LEGISLACIÓN AMBIENTAL",
            "code": "670008"
        }, {
            "name": "EDAFOLOGÍA",
            "code": "670009"
        }, {
            "name": "ESTADÍSTICA",
            "code": "670010"
        }, {
            "name": "FUNDAMENTOS DE BOTÁNICA Y ZOOLOGÍA",
            "code": "670011"
        }, {
            "name": "ECOLOGÍA",
            "code": "670012"
        }, {
            "name": "ECONOMÍA AMBIENTAL",
            "code": "670013"
        }, {
            "name": "TÉCNICAS APLICADAS AL TRABAJO DE CAMPO",
            "code": "670014"
        }, {
            "name": "TOXICOLOGÍA AMBIENTAL Y SALUD PÚBLICA",
            "code": "670015"
        }, {
            "name": "HIDROLOGÍA E HIDROGEOLOGÍA",
            "code": "670016"
        }, {
            "name": "METEOROLOGÍA, CLIMATOLOGÍA Y CONTAMINACIÓN ATMOSFÉRICA",
            "code": "670017"
        }, {
            "name": "ORDENACIÓN DEL TERRITORIO, MEDIO FÍSICO Y HUMANO",
            "code": "670018"
        }, {
            "name": "AUDITORÍA AMBIENTAL",
            "code": "670019"
        }, {
            "name": "EVALUACIÓN DEL IMPACTO AMBIENTAL",
            "code": "670020"
        }, {
            "name": "GESTIÓN Y CONSERVACIÓN DE RECURSOS NATURALES",
            "code": "670021"
        }, {
            "name": "ORGANIZACIÓN Y GESTIÓN DE PROYECTOS",
            "code": "670022"
        }, {
            "name": "TRABAJO FIN DE GRADO",
            "code": "670023"
        }, {
            "name": "PRÁCTICAS EXTERNAS",
            "code": "670046"
        }, {
            "name": "DESARROLLO RURAL",
            "code": "670027"
        }, {
            "name": "GESTIÓN DE RESIDUOS",
            "code": "670031"
        }, {
            "name": "LIMNOLOGÍA",
            "code": "670034"
        }, {
            "name": "MICROORGANISMOS EN PROCESOS MEDIOAMBIENTALES",
            "code": "670036"
        }, {
            "name": "PRÁCTICAS EXTERNAS",
            "code": "670046"
        }, {
            "name": "RESTAURACIÓN DE ESPACIOS DEGRADADOS",
            "code": "670040"
        }, {
            "name": "RIESGOS NATURALES Y ANTROPOGÉNICOS",
            "code": "670041"
        }, {
            "name": "UNIDADES GEOLÓGICAS DE LA PENÍNSULA IBÉRICA Y SU GEODIVERSIDAD",
            "code": "670043"
        }, {
            "name": "CAMBIO GLOBAL: ESTADO, EFECTOS Y MITIGACIÓN",
            "code": "670024"
        }, {
            "name": "DESARROLLO ECONÓMICO Y MEDIOAMBIENTE",
            "code": "670026"
        }, {
            "name": "ECOSISTEMAS HUMANIZADOS",
            "code": "670028"
        }, {
            "name": "EDUCACIÓN AMBIENTAL",
            "code": "670029"
        }, {
            "name": "FAUNA DE LA PENÍNSULA IBÉRICA",
            "code": "670030"
        }, {
            "name": "GESTIÓN Y CONSERVACIÓN DE ÁREAS NATURALES PROTEGIDAS",
            "code": "670033"
        }, {
            "name": "RECURSOS MARINOS",
            "code": "670039"
        }, {
            "name": "TECNOLOGÍAS LIMPIAS Y GESTIÓN ENERGÉTICA",
            "code": "670042"
        }]
    }, {
        "name": "Grado en Química",
        "code": "G660",
        "school_code": "110",
        "school": "",
        "asignaturas": [{
            "name": "FÍSICA",
            "code": "660000"
        }, {
            "name": "OPERACIONES BÁSICAS DE LABORATORIO",
            "code": "660002"
        }, {
            "name": "QUÍMICA BÁSICA",
            "code": "660001"
        }, {
            "name": "BIOLOGÍA",
            "code": "660003"
        }, {
            "name": "MATEMÁTICAS",
            "code": "660004"
        }, {
            "name": "CÁLCULO NUMÉRICO Y ESTADÍSTICA APLICADA",
            "code": "660005"
        }, {
            "name": "ENLACE QUÍMICO Y ESTRUCTURA DE LA MATERIA",
            "code": "660006"
        }, {
            "name": "QUÍMICA ANALÍTICA I",
            "code": "660007"
        }, {
            "name": "QUÍMICA INORGÁNICA I",
            "code": "660008"
        }, {
            "name": "QUÍMICA ORGÁNICA",
            "code": "660009"
        }, {
            "name": "TERMODINÁMICA QUÍMICA",
            "code": "660010"
        }, {
            "name": "BIOQUÍMICA",
            "code": "660012"
        }, {
            "name": "QUÍMICA FÍSICA MOLECULAR",
            "code": "660011"
        }, {
            "name": "QUÍMICA FÍSICA",
            "code": "660013"
        }, {
            "name": "QUÍMICA INORGÁNICA II",
            "code": "660014"
        }, {
            "name": "DETERMINACIÓN ESTRUCTURAL DE COMPUESTOS ORGÁNICOS",
            "code": "660016"
        }, {
            "name": "QUÍMICA ANALÍTICA II",
            "code": "660015"
        }, {
            "name": "CIENCIA DE MATERIALES",
            "code": "660019"
        }, {
            "name": "INGENIERÍA QUÍMICA",
            "code": "660018"
        }, {
            "name": "INTRODUCCIÓN A LA SÍNTESIS ORGÁNICA",
            "code": "660017"
        }, {
            "name": "TRABAJO FIN DE GRADO",
            "code": "660020"
        }, {
            "name": "PRÁCTICAS EXTERNAS",
            "code": "660032"
        }, {
            "name": "BIOLOGÍA MOLECULAR",
            "code": "660021"
        }, {
            "name": "CALIDAD Y QUÍMICA ANALÍTICA APLICADA",
            "code": "660022"
        }, {
            "name": "COMPUESTOS HETEROCÍCLICOS Y BIOMOLÉCULAS",
            "code": "660030"
        }, {
            "name": "QUÍMICA COMPUTACIONAL Y DISEÑO MOLECULAR",
            "code": "660027"
        }, {
            "name": "QUÍMICA ORGANOMETÁLICA",
            "code": "660029"
        }, {
            "name": "REDACCIÓN Y EJECUCIÓN DE PROYECTOS EN QUÍMICA",
            "code": "660024"
        }, {
            "name": "COMPUESTOS INORGÁNICOS PARA LA CIENCIA MODERNA",
            "code": "660028"
        }, {
            "name": "INDUSTRIA QUÍMICA Y SOSTENIBILIDAD",
            "code": "660025"
        }, {
            "name": "LA QUÍMICA ANALITICA EN LA RESOLUCIÓN DE PROBLEMAS CIENTÍFICO-TÉCNICOS",
            "code": "660023"
        }, {
            "name": "POLÍMEROS Y AGREGADOS EN TENSIOACTIVOS",
            "code": "660026"
        }, {
            "name": "SÍNTESIS ORGÁNICA",
            "code": "660031"
        }]
    }, {
        "name": "Grado en Biología",
        "code": "G650",
        "school_code": "102",
        "school": "",
        "asignaturas": [{
            "name": "BOTÁNICA",
            "code": "650003"
        }, {
            "name": "ZOOLOGÍA",
            "code": "650004"
        }, {
            "name": "BIOLOGÍA (MÉTODOS EN BIODIVERSIDAD Y CONSERVACIÓN)",
            "code": "650000"
        }, {
            "name": "MATEMÁTICAS",
            "code": "650001"
        }, {
            "name": "QUÍMICA",
            "code": "650002"
        }, {
            "name": "BIOLOGÍA (MÉTODOS EN BIOLOGÍA CELULAR Y FISIOLOGÍA)",
            "code": "650005"
        }, {
            "name": "FÍSICA",
            "code": "650006"
        }, {
            "name": "GEOLOGÍA",
            "code": "650007"
        }, {
            "name": "BIOLOGÍA CELULAR E HISTOLOGÍA",
            "code": "650010"
        }, {
            "name": "BIOQUÍMICA",
            "code": "650009"
        }, {
            "name": "ECOLOGÍA",
            "code": "650012"
        }, {
            "name": "GENÉTICA",
            "code": "650011"
        }, {
            "name": "ESTADÍSTICA",
            "code": "650008"
        }, {
            "name": "BIOLOGÍA (MÉTODOS EN BIOLOGÍA MOLECULAR)",
            "code": "650013"
        }, {
            "name": "FISIOLOGÍA",
            "code": "650015"
        }, {
            "name": "FISIOLOGÍA VEGETAL",
            "code": "650016"
        }, {
            "name": "MICROBIOLOGÍA",
            "code": "650014"
        }, {
            "name": "TRABAJO FIN DE GRADO",
            "code": "650017"
        }, {
            "name": "ADAPTACIONES FISIOLÓGICAS AL MEDIO",
            "code": "650021"
        }, {
            "name": "ANTROPOLOGÍA",
            "code": "650018"
        }, {
            "name": "BIOLOGÍA EVOLUTIVA",
            "code": "650024"
        }, {
            "name": "BIOLOGÍA MOLECULAR",
            "code": "650032"
        }, {
            "name": "BIOTECNOLOGÍA MICROBIANA",
            "code": "650038"
        }, {
            "name": "CONSERVACIÓN Y RESTAURACIÓN DE ECOSISTEMAS",
            "code": "650027"
        }, {
            "name": "ECOLOGÍA APLICADA Y CAMBIO GLOBAL",
            "code": "650028"
        }, {
            "name": "EMBRIOLOGÍA ANIMAL",
            "code": "650020"
        }, {
            "name": "FISIOLOGÍA AMBIENTAL DE PLANTAS",
            "code": "650029"
        }, {
            "name": "FISIOLOGÍA MOLECULAR DE PLANTAS",
            "code": "650035"
        }, {
            "name": "GENÉTICA MOLECULAR",
            "code": "650037"
        }, {
            "name": "GEOBOTÁNICA",
            "code": "650025"
        }, {
            "name": "INMUNOLOGÍA",
            "code": "650039"
        }, {
            "name": "MICOLOGÍA FORESTAL Y APLICADA",
            "code": "650026"
        }, {
            "name": "MICROBIOLOGÍA AMBIENTAL",
            "code": "650030"
        }, {
            "name": "PALEONTOLOGÍA",
            "code": "650023"
        }, {
            "name": "PARASITOLOGÍA",
            "code": "650022"
        }, {
            "name": "INMUNOLOGÍA",
            "code": "650039"
        }, {
            "name": "ORGANOGRAFÍA MICROSCÓPICA ANIMAL",
            "code": "650019"
        }, {
            "name": "PRÁCTICAS EXTERNAS",
            "code": "650040"
        }, {
            "name": "REGULACIÓN DEL METABOLISMO",
            "code": "650033"
        }, {
            "name": "ZOOLOGÍA DE CAMPO",
            "code": "650031"
        }, {
            "name": "GENÉTICA EVOLUTIVA",
            "code": "650036"
        }]
    }, {
        "name": "Grado en Biología Sanitaria",
        "code": "G651",
        "school_code": "102",
        "school": "",
        "asignaturas": [{
            "name": "BIOLOGÍA CELULAR E HISTOLOGÍA",
            "code": "650010"
        }, {
            "name": "BIOQUÍMICA",
            "code": "650009"
        }, {
            "name": "ANATOMÍA ANIMAL",
            "code": "651000"
        }, {
            "name": "ESTADÍSTICA",
            "code": "650008"
        }, {
            "name": "QUÍMICA",
            "code": "651030"
        }, {
            "name": "ANATOMÍA HUMANA",
            "code": "651001"
        }, {
            "name": "BIOLOGÍA (MÉTODOS EN BIOLOGÍA CELULAR Y FISIOLOGÍA)",
            "code": "650005"
        }, {
            "name": "FÍSICA",
            "code": "650006"
        }, {
            "name": "FISIOLOGÍA",
            "code": "650015"
        }, {
            "name": "GENÉTICA",
            "code": "650011"
        }, {
            "name": "MICROBIOLOGÍA",
            "code": "650014"
        }, {
            "name": "ORGANOGRAFÍA MICROSCÓPICA HUMANA",
            "code": "651002"
        }, {
            "name": "PLANTAS DE INTERÉS BIOSANITARIO",
            "code": "651003"
        }, {
            "name": "BIOLOGÍA (MÉTODOS EN BIOLOGÍA MOLECULAR)",
            "code": "650013"
        }, {
            "name": "EPIDEMIOLOGÍA",
            "code": "651004"
        }, {
            "name": "BIOLOGÍA MOLECULAR",
            "code": "650032"
        }, {
            "name": "INMUNOLOGÍA",
            "code": "650039"
        }, {
            "name": "PARASITOLOGÍA SANITARIA",
            "code": "651005"
        }, {
            "name": "PRODUCTOS VEGETALES DE INTERÉS BIOSANITARIO",
            "code": "651006"
        }, {
            "name": "BIOQUÍMICA CLÍNICA",
            "code": "651010"
        }, {
            "name": "ECOLOGÍA Y BIENESTAR HUMANO",
            "code": "651009"
        }, {
            "name": "FISIOPATOLOGÍA HUMANA",
            "code": "651008"
        }, {
            "name": "INMUNOLOGÍA",
            "code": "650039"
        }, {
            "name": "MICROBIOLOGÍA SANITARIA Y CLÍNICA",
            "code": "651007"
        }, {
            "name": "TRABAJO FIN DE GRADO",
            "code": "651011"
        }, {
            "name": "ANTROPOLOGIA APLICADA A LA SALUD",
            "code": "651012"
        }, {
            "name": "BASES CELULARES DE LA PATOLOGÍA",
            "code": "651014"
        }, {
            "name": "BIOANÁLISIS AVANZADO",
            "code": "651028"
        }, {
            "name": "BIOQUÍMICA DE LOS ALIMENTOS Y LA NUTRICIÓN",
            "code": "651021"
        }, {
            "name": "CITOGENÉTICA",
            "code": "651017"
        }, {
            "name": "FARMACOLOGÍA",
            "code": "651026"
        }, {
            "name": "FUNDAMENTOS DE PATOLOGÍA EN BIOMEDICINA",
            "code": "651020"
        }, {
            "name": "GENÉTICA HUMANA",
            "code": "651018"
        }, {
            "name": "HONGOS DE INTERÉS BIOSANITARIO",
            "code": "651023"
        }, {
            "name": "INMUNOLOGÍA CLÍNICA",
            "code": "651019"
        }, {
            "name": "MICROBIOLOGÍA DE LOS ALIMENTOS",
            "code": "651022"
        }, {
            "name": "NEUROBIOLOGÍA",
            "code": "651016"
        }, {
            "name": "PATOLOGÍA MOLECULAR",
            "code": "651015"
        }, {
            "name": "PREVENCIÓN Y CONTROL DE LAS PARASITOSIS",
            "code": "651027"
        }, {
            "name": "REPRODUCCIÓN Y DESARROLLO HUMANO",
            "code": "651013"
        }, {
            "name": "PRÁCTICAS EXTERNAS",
            "code": "651029"
        }]
    }, {
        "name": "Licenciado en Biología",
        "code": "650",
        "school_code": "102",
        "school": "",
        "asignaturas": [{
            "name": "FISIOLOGÍA VEGETAL",
            "code": "65041"
        }, {
            "name": "FUNDAMENTOS DE GENÉTICA APLICADA",
            "code": "65202"
        }, {
            "name": "FUNDAMENTOS DE MICROBIOLOGÍA APLICADA",
            "code": "65203"
        }, {
            "name": "FUNDAMENTOS DE BIOLOGÍA CELULAR APLICADA",
            "code": "65220"
        }, {
            "name": "FUNDAMENTOS DE BOTÁNICA APLICADA",
            "code": "65221"
        }, {
            "name": "FUNDAMENTOS DE ECOLOGÍA APLICADA",
            "code": "65222"
        }, {
            "name": "FUNDAMENTOS DE FISIOLOGÍA ANIMAL APLICADA",
            "code": "65223"
        }, {
            "name": "ANÁLISIS DE CONTAMINANTES. TÉCNICAS ANALÍTICAS",
            "code": "65301"
        }, {
            "name": "ARTRÓPODOS",
            "code": "65302"
        }, {
            "name": "BASES CELULARES DE LA PATOLOGÍA",
            "code": "65305"
        }, {
            "name": "BIOLOGÍA DE LA REPRODUCCIÓN",
            "code": "65310"
        }, {
            "name": "BIOLOGÍA DEL COMPORTAMIENTO",
            "code": "65313"
        }, {
            "name": "BIOQUÍMICA DE LOS ALIMENTOS Y DE LA NUTRICIÓN",
            "code": "65318"
        }, {
            "name": "BIOTECNOLOGÍA VEGETAL",
            "code": "65319"
        }, {
            "name": "CITOGENÉTICA",
            "code": "65321"
        }, {
            "name": "CONTROL DE LAS ANTROPOZOONOSIS PARASITARIAS",
            "code": "65322"
        }, {
            "name": "CORDADOS",
            "code": "65323"
        }, {
            "name": "DESARROLLO VEGETAL",
            "code": "65324"
        }, {
            "name": "DISEÑO ANIMAL",
            "code": "65325"
        }, {
            "name": "ECOLOGÍA DE SISTEMAS II: RECURSOS ESPECÍFICOS",
            "code": "65327"
        }, {
            "name": "ECOLOGIA DEL PAISAJE Y PLANIFICACION AMBIENTAL",
            "code": "65328"
        }, {
            "name": "ECOLOGÍA MICROBIANA",
            "code": "65330"
        }, {
            "name": "ECOTOXICOLOGÍA",
            "code": "65331"
        }, {
            "name": "EMBRIOLOGÍA CLÍNICA",
            "code": "65332"
        }, {
            "name": "ENTOMOLOGÍA APLICADA",
            "code": "65333"
        }, {
            "name": "EVOLUCIÓN DE GENES Y GENOMAS",
            "code": "65337"
        }, {
            "name": "EVOLUCIÓN HUMANA",
            "code": "65339"
        }, {
            "name": "FISIOLOGÍA Y BIOLOGÍA MOLECULAR DE PLANTAS",
            "code": "65343"
        }, {
            "name": "FISIOLOGÍA Y FISIOPATOLOGÍA HUMANAS",
            "code": "65344"
        }, {
            "name": "FLORA Y VEGETACIÓN DE ESPAÑA",
            "code": "65346"
        }, {
            "name": "GENÉTICA DEL DESARROLLO",
            "code": "65348"
        }, {
            "name": "GEOBOTÁNICA",
            "code": "65350"
        }, {
            "name": "INGENIERÍA GENÉTICA",
            "code": "65352"
        }, {
            "name": "MICOLOGÍA FORESTAL",
            "code": "65359"
        }, {
            "name": "MICROBIOLOGÍA INDUSTRIAL",
            "code": "65360"
        }, {
            "name": "MICROBIOLOGÍA SANITARIA Y CLÍNICA",
            "code": "65361"
        }, {
            "name": "MODELOS ADAPTATIVOS Y GENEALÓGICOS EN PLANTAS",
            "code": "65362"
        }, {
            "name": "PARASITOLOGÍA SANITARIA",
            "code": "65367"
        }, {
            "name": "PLANTAS DE INTERÉS AGRÍCOLA, FORESTAL Y ORNAMENTAL",
            "code": "65369"
        }, {
            "name": "FISIOLOGÍA VEGETAL",
            "code": "65041"
        }]
    }, {
        "name": "Grado en Farmacia",
        "code": "G57",
        "school_code": "104",
        "school": "",
        "asignaturas": [{
            "name": "BIOLOGÍA",
            "code": "570000"
        }, {
            "name": "PRINCIPIOS DE FÍSICA Y BIOFÍSICA",
            "code": "570002"
        }, {
            "name": "QUÍMICA GENERAL INORGÁNICA Y ORGÁNICA",
            "code": "570003"
        }, {
            "name": "BIOQUÍMICA Y BIOLOGÍA MOLECULAR I",
            "code": "570004"
        }, {
            "name": "ESTADÍSTICA",
            "code": "570001"
        }, {
            "name": "FISICOQUÍMICA",
            "code": "570005"
        }, {
            "name": "HISTORIA DE LA FARMACIA Y METODOLOGÍA CIENTÍFICA",
            "code": "570006"
        }, {
            "name": "QUÍMICA INORGÁNICA",
            "code": "570007"
        }, {
            "name": "MICROBIOLOGÍA, PARASITOLOGÍA Y VIROLOGÍA",
            "code": "570009"
        }, {
            "name": "TÉCNICAS ANALÍTICAS (ANÁLISIS QUÍMICO E INSTRUMENTAL)",
            "code": "570011"
        }, {
            "name": "BIOQUÍMICA Y BIOLOGÍA MOLECULAR II",
            "code": "570008"
        }, {
            "name": "QUÍMICA ORGÁNICA",
            "code": "570010"
        }, {
            "name": "BOTÁNICA FARMACÉUTICA Y FARMACOGNOSIA",
            "code": "570012"
        }, {
            "name": "FISIOLOGÍA HUMANA",
            "code": "570013"
        }, {
            "name": "QUÍMICA FARMACEÚTICA",
            "code": "570018"
        }, {
            "name": "BIOFARMACIA Y FARMACOCINÉTICA",
            "code": "570014"
        }, {
            "name": "FARMACIA GALÉNICA I",
            "code": "570015"
        }, {
            "name": "FISIOPATOLOGÍA",
            "code": "570016"
        }, {
            "name": "INMUNOLOGÍA, GENÓMICA Y FARMACOGENÓMICA",
            "code": "570017"
        }, {
            "name": "FARMACIA GALÉNICA II",
            "code": "570019"
        }, {
            "name": "FARMACOLOGÍA Y FARMACOTERAPIA I",
            "code": "570020"
        }, {
            "name": "NUTRICIÓN Y BROMATOLOGÍA",
            "code": "570021"
        }, {
            "name": "FARMACOLOGÍA Y FARMACOTERAPIA II",
            "code": "570023"
        }, {
            "name": "MÉTODOS BIOLÓG.DE DIAGNÓSTICOS EN EL LABORAT.DE BIOQUÍMICA,MICROBIOLOGÍA,PARASITOLOGÍA Y HEMATOLOGÍA",
            "code": "570025"
        }, {
            "name": "DERMOFARMACIA Y PRODUCTOS SANITARIOS",
            "code": "570022"
        }, {
            "name": "FORMULACIÓN DE MEDICAMENTOS",
            "code": "570024"
        }, {
            "name": "TOXICOLOGÍA",
            "code": "570026"
        }, {
            "name": "FARMACIA PRÁCTICA INTEGRADA",
            "code": "570027"
        }, {
            "name": "GESTIÓN, LEGISLACIÓN Y DEONTOLOGÍA",
            "code": "570028"
        }, {
            "name": "SALUD PÚBLICA",
            "code": "570029"
        }, {
            "name": "PRÁCTICAS TUTELADAS",
            "code": "570030"
        }, {
            "name": "TRABAJO FIN DE GRADO",
            "code": "570031"
        }, {
            "name": "ESTUDIO Y PREVENCIÓN DE LAS DROGODEPENDENCIAS",
            "code": "570036"
        }, {
            "name": "FISIOLOGÍA DEL ENVEJECIMIENTO Y FISIOPATOLOGÍA DE LAS ENFERMEDADES CRÓNICAS ASOCIADAS: AT. FARM.",
            "code": "570038"
        }, {
            "name": "FITOTERAPIA",
            "code": "570035"
        }, {
            "name": "FORMULACIÓN MAGISTRAL",
            "code": "570037"
        }, {
            "name": "INICIACIÓN A LA INVESTIGACIÓN EN CIENCIAS FARMACÉUTICAS",
            "code": "570039"
        }, {
            "name": "NUTRICIÓN CLÍNICA Y DIETOTERAPIA",
            "code": "570032"
        }, {
            "name": "PATOLOGÍA MOLECULAR",
            "code": "570034"
        }, {
            "name": "PRÁCTICAS EXTERNAS",
            "code": "570048"
        }, {
            "name": "PRÁCTICAS EXTERNAS",
            "code": "570047"
        }, {
            "name": "SANIDAD AMBIENTAL",
            "code": "570033"
        }, {
            "name": "BIOÉTICA E INDUSTRIA FARMACÉUTICA",
            "code": "570046"
        }, {
            "name": "CONTROL DE CALIDAD EN LA INDUSTRIA FARMACÉUTICA",
            "code": "570043"
        }, {
            "name": "CONTROL DE CALIDAD Y SEGURIDAD EN LA INDUSTRIA ALIMENTARIA",
            "code": "570045"
        }, {
            "name": "DESARROLLO ANALÍTICO DE MEDICAMENTOS",
            "code": "570041"
        }, {
            "name": "INICIACIÓN A LA INVESTIGACIÓN EN CIENCIAS FARMACÉUTICAS",
            "code": "570039"
        }, {
            "name": "PRÁCTICAS EXTERNAS",
            "code": "570048"
        }, {
            "name": "PRÁCTICAS EXTERNAS",
            "code": "570047"
        }, {
            "name": "PRODUCCIÓN BIOTECNOLÓGICA DE FÁRMACOS",
            "code": "570044"
        }, {
            "name": "SÍNTESIS DE FÁRMACOS",
            "code": "570040"
        }, {
            "name": "TECNOLOGÍA FARMACÉUTICA INDUSTRIAL",
            "code": "570042"
        }]
    }, {
        "name": "Licenciado en Farmacia",
        "code": "57",
        "school_code": "104",
        "school": "",
        "asignaturas": [{
            "name": "FÍSICA Y FISICOQUÍMICA",
            "code": "30352"
        }, {
            "name": "QUÍMICA ORGÁNICA",
            "code": "30638"
        }, {
            "name": "BIOLOGÍA MOLECULAR E INGENIERÍA GENÉTICA",
            "code": "31787"
        }, {
            "name": "FARMACOLOGÍA GENERAL",
            "code": "31791"
        }, {
            "name": "HETEROCICLOS DE USO FARMACEÚTICO",
            "code": "31786"
        }, {
            "name": "QUÍMICA FARMACEÚTICA",
            "code": "31788"
        }, {
            "name": "BIOFARMACIA Y FARMACOCINÉTICA",
            "code": "31955"
        }, {
            "name": "BIOQUÍMICA CLÍNICA Y PATOLOGÍA MOLECULAR HUMANA",
            "code": "31966"
        }, {
            "name": "BROMATOLOGÍA",
            "code": "32035"
        }, {
            "name": "FARMACIA GALÉNICA",
            "code": "31957"
        }, {
            "name": "FARMACOLOGÍA Y FARMACOTERAPIA",
            "code": "31953"
        }, {
            "name": "HEMATOLOGÍA",
            "code": "31954"
        }, {
            "name": "INMUNOLOGÍA",
            "code": "32005"
        }, {
            "name": "MICROBIOLOGÍA CLÍNICA",
            "code": "31976"
        }, {
            "name": "NUTRICIÓN",
            "code": "32034"
        }, {
            "name": "PARASITOLOGÍA CLÍNICA",
            "code": "31975"
        }, {
            "name": "TOXICOLOGÍA GENERAL",
            "code": "33034"
        }, {
            "name": "AMPLIACIÓN  DE FARMACOGNOSIA",
            "code": "33100"
        }, {
            "name": "FARMACIA CLÍNICA",
            "code": "33104"
        }, {
            "name": "FORMULACIÓN DE MEDICAMENTOS",
            "code": "32664"
        }, {
            "name": "GESTIÓN Y PLANIFICACIÓN",
            "code": "33105"
        }, {
            "name": "LEGISLACIÓN Y DEONTOLOGÍA",
            "code": "33106"
        }, {
            "name": "SALUD PÚBLICA",
            "code": "32616"
        }, {
            "name": "ESTANCIAS",
            "code": "32685"
        }, {
            "name": "AMPLIACIÓN DE MICROBIOLOGÍA CLÍNICA",
            "code": "32568"
        }, {
            "name": "ANÁLISIS DE MEDICAMENTOS",
            "code": "32687"
        }, {
            "name": "CONTROL DE CALIDAD EN LA INDUSTRIA FARMACÉUTICA",
            "code": "33855"
        }, {
            "name": "FITOTERAPIA",
            "code": "33079"
        }, {
            "name": "MÉTODOS INSTRUMENTALES AVANZADOS",
            "code": "32686"
        }, {
            "name": "NUTRICIÓN APLICADA Y DIETÉTICA",
            "code": "32493"
        }, {
            "name": "SANIDAD AMBIENTAL",
            "code": "32615"
        }, {
            "name": "SÍNTESIS DE FÁRMACOS",
            "code": "32566"
        }, {
            "name": "TECNOLOGÍA FARMACÉUTICA INDUSTRIAL",
            "code": "31997"
        }, {
            "name": "TOXICOLOGÍA ALIMENTARIA",
            "code": "32040"
        }, {
            "name": "BASES MOLECULARES DE LA FARMACOLOGÍA",
            "code": "32470"
        }, {
            "name": "AMPLIACIÓN DE HISTORIA DE LA FARMACIA",
            "code": "30646"
        }, {
            "name": "DERMOFARMACIA",
            "code": "31956"
        }, {
            "name": "ESPECTROSCOPIA DE FÁRMACOS",
            "code": "31793"
        }, {
            "name": "HIGIENE Y MANIPULACIÓN DE LOS ALIMENTOS",
            "code": "32492"
        }]
    }, {
        "name": "Grado de Magisterio en Educación Infantil",
        "code": "G420",
        "school_code": "202",
        "school": "",
        "asignaturas": [{
            "name": "COMUNICACIÓN Y MEDIOS SOCIOCULTURALES: ENSEÑANZA Y APRENDIZAJE",
            "code": "420000"
        }, {
            "name": "DIDÁCTICA",
            "code": "420001"
        }, {
            "name": "EVOLUCIÓN HISTÓRICA Y SISTEMAS CONTEMPORÁNEOS DE EDUCACIÓN INFANTIL",
            "code": "420002"
        }, {
            "name": "FILOSOFÍA, ÉTICA Y EDUCACIÓN MORAL",
            "code": "420003"
        }, {
            "name": "PSICOLOGÍA DEL DESARROLLO",
            "code": "420004"
        }, {
            "name": "DIAGNÓSTICO PEDAGÓGICO Y TÉCNICAS DE OBSERVACIÓN EN EL AULA DE EDUCACIÓN INFANTIL",
            "code": "420005"
        }, {
            "name": "ORGANIZACIÓN DE LAS INSTITUCIONES EDUCATIVAS",
            "code": "420006"
        }, {
            "name": "ORIENTACIÓN E INTERVENCIÓN TUTORIAL",
            "code": "420007"
        }, {
            "name": "PSICOLOGÍA DE LA EDUCACIÓN",
            "code": "420008"
        }, {
            "name": "SOCIOLOGÍA DE LA EDUCACIÓN",
            "code": "420009"
        }, {
            "name": "FUNDAMENTOS PSICOLÓGICOS DE ATENCIÓN A LA DIVERSIDAD",
            "code": "420010"
        }, {
            "name": "LENGUA EXTRANJERA PARA EDUCACIÓN INFANTIL (FRANCÉS)",
            "code": "420029"
        }, {
            "name": "LENGUA EXTRANJERA PARA EDUCACIÓN INFANTIL (INGLÉS)",
            "code": "420011"
        }, {
            "name": "PRACTICUM I",
            "code": "420012"
        }, {
            "name": "PROMOCIÓN DE LA SALUD Y HÁBITOS SALUDABLES",
            "code": "420013"
        }, {
            "name": "ATENCIÓN TEMPRANA: FUNDAMENTOS Y RECURSOS",
            "code": "420014"
        }, {
            "name": "EL JUEGO MUSICAL: EXPRESIÓN Y PERCEPCIÓN",
            "code": "420015"
        }, {
            "name": "LA INNOVACIÓN EDUCATIVA",
            "code": "420016"
        }, {
            "name": "PROCESOS DE APRENDIZAJE:DESARROLLO DE LAS HABILIDADES COMUNICATIVAS",
            "code": "420017"
        }, {
            "name": "PSICOLOGÍA Y CONTEXTOS EDUCATIVOS",
            "code": "420018"
        }, {
            "name": "ARTES PLÁSTICAS Y VISUALES EN EDUCACIÓN INFANTIL",
            "code": "420019"
        }, {
            "name": "ENSEÑANZA Y APRENDIZAJE DE LAS CIENCIAS DE LA NATURALEZA",
            "code": "420020"
        }, {
            "name": "ENSEÑANZA Y APRENDIZAJE DE LAS CIENCIAS SOCIALES",
            "code": "420021"
        }, {
            "name": "ENSEÑANZA Y APRENDIZAJE DE LAS MATEMÁTICAS",
            "code": "420022"
        }, {
            "name": "PRACTICUM II",
            "code": "420023"
        }, {
            "name": "PSICOMOTRICIDAD INFANTIL",
            "code": "420024"
        }, {
            "name": "DIDÁCTICA DE LA LENGUA ESPAÑOLA Y DE LA LITERATURA",
            "code": "420025"
        }, {
            "name": "PROYECTOS PARA LA EXPRESIÓN INTEGRAL INFANTIL",
            "code": "420026"
        }, {
            "name": "PRÁCTICUM III",
            "code": "420027"
        }, {
            "name": "PRACTICUM III ( LENGUA EXTRANJERA PARA EDUCACIÓN INFANTIL)",
            "code": "420045"
        }, {
            "name": "PRACTICUM III (CONOCIMIENTO DEL ENTORNO)",
            "code": "420044"
        }, {
            "name": "PRACTICUM III (LENGUA Y LITERATURA ESPAÑOLA PARA EDUCACIÓN INFANTIL",
            "code": "420046"
        }, {
            "name": "TRABAJO FIN DE GRADO",
            "code": "420028"
        }, {
            "name": "CREACIÓN DEL REPERTORIO PARA EL AULA: ELABORAC. DE MATERIALES DIDÁCTICOS ADAPTADOS A  ETAPA DE E.I.",
            "code": "420060"
        }, {
            "name": "EXPRESIÓN VOCAL E INSTRUMENTAL Y SU DIDÁCTICA",
            "code": "420065"
        }, {
            "name": "ACCIÓN TUTORIAL Y ORIENTACIÓN FAMILIAR",
            "code": "420034"
        }, {
            "name": "ATENCIÓN TEMPRANA: DIAGNÓSTICO E INTERVENCIÓN",
            "code": "420033"
        }, {
            "name": "DIDÁCTICA DEL INGLÉS PARA EDUCACIÓN INFANTIL",
            "code": "420054"
        }, {
            "name": "EDUCACIÓN PARA LA SALUD",
            "code": "420031"
        }, {
            "name": "EL TALLER DE TEATRO EN LA ESCUELA",
            "code": "420051"
        }, {
            "name": "FENÓMENOS FÍSICOS Y SU DIDÁCTICA",
            "code": "420055"
        }, {
            "name": "INTRODUCCIÓN AL PENSAMIENTO CRÍTICO",
            "code": "420030"
        }, {
            "name": "LA IGLESIA, LOS SACRAMENTOS Y LA MORAL",
            "code": "420058"
        }, {
            "name": "LENGUA EXTRANJERA EN EL AULA DE EDUCACIÓN INFANTIL",
            "code": "420032"
        }, {
            "name": "LENGUA EXTRANJERA PARA EDUCACIÓN INFANTIL IV: AMPLIACIÓN DE LA LENGUA INGLESA",
            "code": "420053"
        }, {
            "name": "LITERATURA INFANTIL",
            "code": "420052"
        }, {
            "name": "MATERIALES PARA LA ENSEÑANZA DE LAS CIENCIAS SOCIALES EN EDUCACIÓN INFANTIL",
            "code": "420056"
        }, {
            "name": "RELIGIÓN, CULTURA Y VALORES",
            "code": "420057"
        }, {
            "name": "ATENCIÓN A LA DIVERSIDAD Y DIFERENCIACIÓN CURRICULAR",
            "code": "420062"
        }, {
            "name": "COMPETENCIA COMUNICATIVA Y REFLEXIÓN SOBRE LA LENGUA",
            "code": "420040"
        }, {
            "name": "CONOCIMIENTO DEL ENTORNO NATURAL",
            "code": "420036"
        }, {
            "name": "DIDÁCTICA DE LA EXPRESIÓN MUSICAL EN EDUCACIÓN INFANTIL",
            "code": "420047"
        }, {
            "name": "EDUCACIÓN INCLUSIVA: PRINCIPIOS Y FUNDAMENTOS",
            "code": "420061"
        }, {
            "name": "EL MENSAJE CRISTIANO",
            "code": "420042"
        }, {
            "name": "FORMACIÓN MUSICAL EN EDUCACIÓN INFANTIL",
            "code": "420048"
        }, {
            "name": "LENGUA EXTRANJERA PARA EDUCACIÓN INFANTIL II: DESTREZAS DE COMPRENSIÓN ORAL Y ESCRITA",
            "code": "420038"
        }, {
            "name": "LENGUA EXTRANJERA PARA EDUCACIÓN INFANTIL III: DESTREZAS DE EXPRESIÓN ORAL Y ESCRITA",
            "code": "420039"
        }, {
            "name": "PEDAGOGÍA Y DIDÁCTICA DE LA RELIGIÓN PARA EDUCACIÓN INFANTIL",
            "code": "420043"
        }, {
            "name": "QUÍMICA Y EDUCACIÓN ALIMENTARIA",
            "code": "420037"
        }, {
            "name": "TALLER DE LENGUA ORAL Y ESCRITA",
            "code": "420041"
        }]
    }, {
        "name": "Grado de Magisterio en Educación Primaria",
        "code": "G430",
        "school_code": "202",
        "school": "",
        "asignaturas": [{
            "name": "COMUNICACIÓN Y MEDIOS SOCIOCULTURALES: ENSEÑANZA Y APRENDIZAJE",
            "code": "430048"
        }, {
            "name": "DIDÁCTICA",
            "code": "420001"
        }, {
            "name": "FILOSOFÍA, ÉTICA Y EDUCACIÓN MORAL",
            "code": "420003"
        }, {
            "name": "PROCESOS DE APRENDIZAJE:DESARROLLO DE LAS HABILIDADES COMUNICATIVAS",
            "code": "430000"
        }, {
            "name": "PSICOLOGÍA DEL DESARROLLO",
            "code": "420004"
        }, {
            "name": "GEOGRAFÍA GENERAL",
            "code": "430001"
        }, {
            "name": "LENGUA ESPAÑOLA Y SU DIDÁCTICA",
            "code": "430002"
        }, {
            "name": "ORGANIZACIÓN DE LAS INSTITUCIONES EDUCATIVAS",
            "code": "420006"
        }, {
            "name": "PSICOLOGÍA DE LA EDUCACIÓN",
            "code": "420008"
        }, {
            "name": "SOCIOLOGÍA DE LA EDUCACIÓN",
            "code": "420009"
        }, {
            "name": "FORMACIÓN VOCAL E INSTRUMENTAL:RECURSOS DIDÁCTICOS",
            "code": "430003"
        }, {
            "name": "FUNDAMENTOS PSICOLÓGICOS DE ATENCIÓN A LA DIVERSIDAD",
            "code": "420010"
        }, {
            "name": "LENGUA EXTRANJERA I (FRANCÉS)",
            "code": "430022"
        }, {
            "name": "LENGUA EXTRANJERA I (INGLÉS)",
            "code": "430004"
        }, {
            "name": "MATEMÁTICAS I",
            "code": "430005"
        }, {
            "name": "PRACTICUM I",
            "code": "430006"
        }, {
            "name": "CIENCIAS DE LA MATERIA Y DE LA ENERGÍA",
            "code": "430008"
        }, {
            "name": "CIENCIAS DE LA TIERRA Y DE LA VIDA",
            "code": "430009"
        }, {
            "name": "LA INNOVACIÓN EDUCATIVA: PERSPECTIVAS CONTEMPORÁNEAS",
            "code": "430007"
        }, {
            "name": "LENGUA EXTRANJERA II (FRANCÉS)",
            "code": "430023"
        }, {
            "name": "LENGUA EXTRANJERA II (INGLÉS)",
            "code": "430010"
        }, {
            "name": "DIDÁCTICA DE LAS CIENCIAS DE LA NATURALEZA",
            "code": "430011"
        }, {
            "name": "DIDÁCTICA DE LAS CIENCIAS SOCIALES",
            "code": "430012"
        }, {
            "name": "EL LENGUAJE PLÁSTICO Y VISUAL: RECURSOS Y APLICACIONES",
            "code": "430013"
        }, {
            "name": "LITERATURA ESPAÑOLA Y SU DIDÁCTICA",
            "code": "430014"
        }, {
            "name": "MATEMÁTICAS II",
            "code": "430015"
        }, {
            "name": "DIDÁCTICA DE LAS MATEMÁTICAS",
            "code": "430016"
        }, {
            "name": "HISTORIA DE ESPAÑA",
            "code": "430017"
        }, {
            "name": "PRACTICUM II",
            "code": "430018"
        }, {
            "name": "EDUCACIÓN FÍSICA Y SU DIDÁCTICA",
            "code": "430019"
        }, {
            "name": "PRACTICUM III",
            "code": "430020"
        }, {
            "name": "PRACTICUM III (LAS ARTES EN EDUCACIÓN PRIMARIA)",
            "code": "430034"
        }, {
            "name": "PRACTICUM III (LENGUA EXTRANJERA PARA EDUCACIÓN PRIMARIA)",
            "code": "430035"
        }, {
            "name": "PRACTICUM III (NECESIDADES EDUCATIVAS ESPECIALES EN EDUCACIÓN PRIMARIA)",
            "code": "430049"
        }, {
            "name": "TRABAJO FIN DE GRADO",
            "code": "430021"
        }, {
            "name": "TRABAJO FIN DE GRADO",
            "code": "430054"
        }, {
            "name": "APRENDIZAJE COOPERATIVO COMO ESTRATEGIA DE INCLUSIÓN",
            "code": "430043"
        }, {
            "name": "ATENCIÓN A LA DIVERSIDAD Y DIFERENCIACIÓN CURRICULAR",
            "code": "430042"
        }, {
            "name": "INTERCULTURALIDAD Y RECURSOS TECNOLÓGICOS",
            "code": "430044"
        }, {
            "name": "EDUCACIÓN INCLUSIVA: PRINCIPIOS Y FUNDAMENTOS",
            "code": "430030"
        }, {
            "name": "AMPLIACIÓN DE LA LENGUA EXTRANJERA",
            "code": "430027"
        }, {
            "name": "APRENDIZAJE COOPERATIVO COMO ESTRATEGIA DE INCLUSIÓN",
            "code": "430043"
        }, {
            "name": "APRENDIZAJE INTEGRADO DE CONTENIDOS Y LENGUA INGLESA (AIRCLE/CLIL)",
            "code": "430040"
        }, {
            "name": "ATENCIÓN A LA DIVERSIDAD Y DIFERENCIACIÓN CURRICULAR",
            "code": "430042"
        }, {
            "name": "CÓMO ESCUCHAR LA MÚSICA",
            "code": "430036"
        }, {
            "name": "COMPLEMENTOS FORMATIVOS PARA LA ENSEÑANZA DE LA MATEMÁTICA EN EDUCACIÓN PRIMARIA",
            "code": "430029"
        }, {
            "name": "COMPLEMENTOS FORMATIVOS PARA LA ENSEÑANZA DEL MEDIO EN EDUCACIÓN PRIMARIA",
            "code": "430028"
        }, {
            "name": "DIDÁCTICA DE LA LENGUA INGLESA",
            "code": "430041"
        }, {
            "name": "HABILIDADES LINGÜISTICAS Y COMUNICATIVAS",
            "code": "430024"
        }, {
            "name": "INNOVACIÓN Y CALIDAD EN LA ESCUELA",
            "code": "430025"
        }, {
            "name": "INTERCULTURALIDAD Y RECURSOS TECNOLÓGICOS",
            "code": "430044"
        }, {
            "name": "INTRODUCCIÓN AL PENSAMIENTO CRÍTICO",
            "code": "420030"
        }, {
            "name": "LA CREACIÓN MUSICAL EN EL AULA DE PRIMARIA",
            "code": "430037"
        }, {
            "name": "LA IGLESIA, LOS SACRAMENTOS Y LA MORAL",
            "code": "420058"
        }, {
            "name": "LENGUA EXTRANJERA IV: DESTREZAS DE EXPRESIÓN ORAL Y ESCRITA",
            "code": "430039"
        }, {
            "name": "PEDAGOGÍA Y DIDÁCTICA DE LA RELIGIÓN EN EDUCACIÓN PRIMARIA",
            "code": "430047"
        }, {
            "name": "PERCEPCIÓN Y EXPRESIÓN MUSICAL",
            "code": "430026"
        }, {
            "name": "RECURSOS MUSICALES EN EDUCACIÓN PRIMARIA",
            "code": "430038"
        }, {
            "name": "RELIGIÓN, CULTURA Y VALORES",
            "code": "420057"
        }, {
            "name": "EDUCACIÓN INCLUSIVA: PRINCIPIOS Y FUNDAMENTOS",
            "code": "430030"
        }, {
            "name": "EL MENSAJE CRISTIANO",
            "code": "420042"
        }, {
            "name": "ELEMENTOS Y FUNCIONES BÁSICAS DE LA ESTRUCTURA MUSICAL",
            "code": "430031"
        }, {
            "name": "IMAGEN, PERCEPCIÓN, EXPRESIÓN Y COMUNICACIÓN CORPORAL",
            "code": "430052"
        }, {
            "name": "LA LITERATURA ESPAÑOLA Y SUS TEXTOS",
            "code": "430050"
        }, {
            "name": "LENGUA EXTRANJERA III: DESTREZAS DE COMPRENSIÓN ORAL Y ESCRITA",
            "code": "430032"
        }]
    }, {
        "name": "Doble Grado en Turismo y Administración y Dirección de Empresas",
        "code": "G450",
        "school_code": "208",
        "school": "",
        "asignaturas": [{
            "name": "DERECHO DE LA EMPRESA",
            "code": "410002"
        }, {
            "name": "ECONOMÍA DE LA EMPRESA",
            "code": "410000"
        }, {
            "name": "GEOGRAFÍA",
            "code": "680000"
        }, {
            "name": "MATEMÁTICAS EMPRESARIALES I",
            "code": "410001"
        }, {
            "name": "ESTADÍSTICA EMPRESARIAL I",
            "code": "410006"
        }, {
            "name": "GEOGRAFÍA TURÍSTICA",
            "code": "680006"
        }, {
            "name": "IDIOMA EXTRANJERO: INGLÉS I",
            "code": "680004"
        }, {
            "name": "MATEMÁTICAS EMPRESARIALES II",
            "code": "410004"
        }, {
            "name": "TEORÍA ECONÓMICA",
            "code": "410005"
        }, {
            "name": "DERECHO DE SOCIEDADES",
            "code": "410011"
        }, {
            "name": "ESTADÍSTICA EMPRESARIAL II",
            "code": "410007"
        }, {
            "name": "IDIOMA EXTRANJERO: INGLÉS II",
            "code": "680009"
        }, {
            "name": "INTRODUCCIÓN A LA CONTABILIDAD",
            "code": "410008"
        }, {
            "name": "OPERACIONES Y PROCESOS DE PRODUCCIÓN I",
            "code": "680013"
        }, {
            "name": "CONTABILIDAD FINANCIERA Y DE SOCIEDADES",
            "code": "410013"
        }, {
            "name": "ESTRUCTURA DEL MERCADO TURÍSTICO",
            "code": "680008"
        }, {
            "name": "LENGUA EXTRANJERA APLICADA AL TURISMO: ALEMÁN I",
            "code": "680016"
        }, {
            "name": "MARKETING TURÍSTICO I",
            "code": "680007"
        }, {
            "name": "OPERACIONES Y PROCESOS DE PRODUCCIÓN II",
            "code": "680017"
        }, {
            "name": "ANÁLISIS DE LAS OPERACIONES FINANCIERAS",
            "code": "410009"
        }, {
            "name": "ANÁLISIS DEL ENTORNO ECONÓMICO DE LA EMPRESA TURÍSTICA",
            "code": "680021"
        }, {
            "name": "LENGUA EXTRANJERA APLICADA AL TURISMO: ALEMÁN II",
            "code": "680019"
        }, {
            "name": "MARKETING: ESTRATEGIAS",
            "code": "410017"
        }, {
            "name": "PATRIMONIO I",
            "code": "680022"
        }, {
            "name": "LENGUA EXTRANJERA APLICADA AL TURISMO: FRANCÉS I",
            "code": "680015"
        }, {
            "name": "PATRIMONIO II",
            "code": "680025"
        }, {
            "name": "RÉGIMEN FISCAL DE LA EMPRESA",
            "code": "410020"
        }, {
            "name": "TURISMO Y SOSTENIBILIDAD AMBIENTAL",
            "code": "680023"
        }, {
            "name": "CONTABILIDAD DE COSTES",
            "code": "410015"
        }, {
            "name": "DIRECCIÓN FINANCIERA I",
            "code": "410016"
        }, {
            "name": "LENGUA EXTRANJERA APLICADA AL TURISMO: FRANCÉS II",
            "code": "680020"
        }, {
            "name": "ORGANIZACIÓN Y GESTIÓN DE RECURSOS HUMANOS",
            "code": "680010"
        }, {
            "name": "CONTABILIDAD DE COSTES",
            "code": "410015"
        }, {
            "name": "DIRECCIÓN ESTRATÉGICA EMPRESARIAL",
            "code": "410022"
        }, {
            "name": "DIRECCIÓN FINANCIERA II",
            "code": "410019"
        }, {
            "name": "ESTADOS FINANCIEROS",
            "code": "410018"
        }, {
            "name": "DERECHO INTERNACIONAL DEL TRABAJO",
            "code": "410034"
        }, {
            "name": "ALEMÁN DEL TURISMO",
            "code": "680055"
        }, {
            "name": "ANÁLISIS EMPÍRICO DEL MERCADO TURÍSTICO",
            "code": "680053"
        }, {
            "name": "ASPECTOS URBANOS Y ARQUITECTÓNICOS DE LA PLANIFICACIÓN TURÍSTICA",
            "code": "680048"
        }, {
            "name": "CARTOGRAFÍA TURÍSTICA",
            "code": "680054"
        }, {
            "name": "CONSOLIDACIÓN CONTABLE",
            "code": "410042"
        }, {
            "name": "CONTABILIDAD AVANZADA",
            "code": "410036"
        }, {
            "name": "CULTURA ALIMENTARIA Y TURISMO",
            "code": "680057"
        }, {
            "name": "DERECHO DE LA CONTRATACIÓN",
            "code": "410026"
        }, {
            "name": "ESTADÍSTICA PARA LA INVESTIGACIÓN DE LOS MERCADOS",
            "code": "410027"
        }, {
            "name": "EXPRESIONES ARTÍSTICAS DE LA EDAD MODERNA",
            "code": "680056"
        }, {
            "name": "FRANCÉS DEL TURISMO",
            "code": "680051"
        }, {
            "name": "GESTIÓN DE RIESGOS FINANCIEROS",
            "code": "410039"
        }, {
            "name": "GESTIÓN HOTELERA",
            "code": "680037"
        }, {
            "name": "HERRAMIENTAS INFORMÁTICAS PARA EL ESTUDIO DEL MERCADO TURÍSTICO",
            "code": "680052"
        }, {
            "name": "INTRODUCCIÓN A LA AUDITORÍA",
            "code": "410043"
        }, {
            "name": "PLANIFICACIÓN FINANCIERA",
            "code": "410035"
        }, {
            "name": "POLÍTICA DE COMUNICACIÓN EN LA EMPRESA",
            "code": "410029"
        }, {
            "name": "POLÍTICA ECONÓMICA DEL TURISMO",
            "code": "680047"
        }, {
            "name": "PRESENTACIONES EFICACES Y NEGOCIACIÓN",
            "code": "410040"
        }, {
            "name": "PSICOLOGÍA SOCIAL DEL TURISMO",
            "code": "680043"
        }, {
            "name": "PUBLICIDAD, RELACIONES PUBLICAS Y PROMOCIÓN DE VENTAS EN EL SECTOR TURÍSTICO",
            "code": "680046"
        }, {
            "name": "REGÍMENES ESPECIALES DE TRIBUTACIÓN",
            "code": "410032"
        }, {
            "name": "SISTEMAS DE DISTRIBUCIÓN EN TURISMO: APLICACIÓN SAVIA AMADEUS",
            "code": "680042"
        }, {
            "name": "TALLER DE PAISAJE Y PLANIFICACIÓN TURÍSTICA",
            "code": "680058"
        }, {
            "name": "TURISMO Y DESARROLLO ECONÓMICO",
            "code": "680041"
        }, {
            "name": "ANÁLISIS DE DATOS",
            "code": "410038"
        }, {
            "name": "ANÁLISIS DEL ENTORNO ECONÓMICO EMPRESARIAL",
            "code": "410030"
        }, {
            "name": "CONTABILIDAD DE GESTIÓN",
            "code": "410037"
        }, {
            "name": "DERECHO DE LA CONTRATACIÓN",
            "code": "410026"
        }, {
            "name": "DIRECCIÓN DE LA EMPRESA FINANCIERA",
            "code": "410047"
        }, {
            "name": "EADE (ECONOMETRÍA APLICADA A LA TOMA DE DECISIONES EMPRESARIALES)",
            "code": "410045"
        }, {
            "name": "LIDERAZGO Y COMPORTAMIENTO DIRECTIVO",
            "code": "410028"
        }, {
            "name": "PLAN DE NEGOCIOS",
            "code": "410031"
        }, {
            "name": "TÉCNICAS DE AUDITORÍA",
            "code": "410044"
        }, {
            "name": "TÉCNICAS DE SELECCIÓN Y DE JOB HUNTING",
            "code": "410046"
        }]
    }, {
        "name": "Grado en Admón. y Dirección de empresas",
        "code": "G410",
        "school_code": "206",
        "school": "",
        "asignaturas": [{
            "name": "DERECHO DE LA EMPRESA",
            "code": "410002"
        }, {
            "name": "ECONOMÍA DE LA EMPRESA",
            "code": "410000"
        }, {
            "name": "MATEMÁTICAS EMPRESARIALES I",
            "code": "410001"
        }, {
            "name": "ECONOMÍA ESPAÑOLA Y MUNDIAL",
            "code": "410003"
        }, {
            "name": "ESTADÍSTICA EMPRESARIAL I",
            "code": "410006"
        }, {
            "name": "MATEMÁTICAS EMPRESARIALES II",
            "code": "410004"
        }, {
            "name": "TEORÍA ECONÓMICA",
            "code": "410005"
        }, {
            "name": "ANÁLISIS DE LAS OPERACIONES FINANCIERAS",
            "code": "410009"
        }, {
            "name": "DERECHO DE SOCIEDADES",
            "code": "410011"
        }, {
            "name": "ESTADÍSTICA EMPRESARIAL II",
            "code": "410007"
        }, {
            "name": "INTRODUCCIÓN A LA CONTABILIDAD",
            "code": "410008"
        }, {
            "name": "ORGANIZACIÓN Y RECURSOS HUMANOS",
            "code": "410010"
        }, {
            "name": "CONTABILIDAD FINANCIERA Y DE SOCIEDADES",
            "code": "410013"
        }, {
            "name": "MARKETING: FUNDAMENTOS",
            "code": "410012"
        }, {
            "name": "OPERACIONES Y PROCESOS EMPRESARIALES",
            "code": "410014"
        }, {
            "name": "CONTABILIDAD DE COSTES",
            "code": "410015"
        }, {
            "name": "DIRECCIÓN FINANCIERA I",
            "code": "410016"
        }, {
            "name": "MARKETING: ESTRATEGIAS",
            "code": "410017"
        }, {
            "name": "CONTABILIDAD DE COSTES",
            "code": "410015"
        }, {
            "name": "DIRECCIÓN FINANCIERA II",
            "code": "410019"
        }, {
            "name": "ESTADOS FINANCIEROS",
            "code": "410018"
        }, {
            "name": "RÉGIMEN FISCAL DE LA EMPRESA",
            "code": "410020"
        }, {
            "name": "DIRECCIÓN ESTRATÉGICA EMPRESARIAL",
            "code": "410022"
        }, {
            "name": "TRABAJO FIN DE GRADO",
            "code": "410024"
        }, {
            "name": "PRÁCTICAS EXTERNAS",
            "code": "410021"
        }, {
            "name": "PRÁCTICAS EXTERNAS",
            "code": "410023"
        }, {
            "name": "DERECHO INTERNACIONAL DEL TRABAJO",
            "code": "410034"
        }, {
            "name": "DERECHO DE LA CONTRATACIÓN",
            "code": "410026"
        }, {
            "name": "ESTADÍSTICA PARA LA INVESTIGACIÓN DE LOS MERCADOS",
            "code": "410027"
        }, {
            "name": "GESTIÓN DE RIESGOS FINANCIEROS",
            "code": "410039"
        }, {
            "name": "INTRODUCCIÓN A LA AUDITORÍA",
            "code": "410043"
        }, {
            "name": "PLANIFICACIÓN FINANCIERA",
            "code": "410035"
        }, {
            "name": "POLÍTICA DE COMUNICACIÓN EN LA EMPRESA",
            "code": "410029"
        }, {
            "name": "POLÍTICA ECONÓMICA DEL TURISMO",
            "code": "680047"
        }, {
            "name": "PRESENTACIONES EFICACES Y NEGOCIACIÓN",
            "code": "410040"
        }, {
            "name": "PUBLICIDAD, RELACIONES PUBLICAS Y PROMOCIÓN DE VENTAS EN EL SECTOR TURÍSTICO",
            "code": "680046"
        }, {
            "name": "REGÍMENES ESPECIALES DE TRIBUTACIÓN",
            "code": "410032"
        }, {
            "name": "ANÁLISIS DE DATOS",
            "code": "410038"
        }, {
            "name": "ANÁLISIS DEL ENTORNO ECONÓMICO EMPRESARIAL",
            "code": "410030"
        }, {
            "name": "DERECHO DE LA CONTRATACIÓN",
            "code": "410026"
        }, {
            "name": "DIRECCIÓN DE LA EMPRESA FINANCIERA",
            "code": "410047"
        }, {
            "name": "EADE (ECONOMETRÍA APLICADA A LA TOMA DE DECISIONES EMPRESARIALES)",
            "code": "410045"
        }, {
            "name": "LIDERAZGO Y COMPORTAMIENTO DIRECTIVO",
            "code": "410028"
        }, {
            "name": "PLAN DE NEGOCIOS",
            "code": "410031"
        }, {
            "name": "TÉCNICAS DE SELECCIÓN Y DE JOB HUNTING",
            "code": "410046"
        }]
    }, {
        "name": "Grado en Turismo",
        "code": "G680",
        "school_code": "208",
        "school": "",
        "asignaturas": [{
            "name": "ECONOMÍA",
            "code": "680002"
        }, {
            "name": "ESTADÍSTICA APLICADA AL TURISMO",
            "code": "680003"
        }, {
            "name": "FUNDAMENTOS DEL DERECHO",
            "code": "680001"
        }, {
            "name": "GEOGRAFÍA",
            "code": "680000"
        }, {
            "name": "ECONOMÍA DE LA EMPRESA",
            "code": "680005"
        }, {
            "name": "ESTRUCTURA DEL MERCADO TURÍSTICO",
            "code": "680008"
        }, {
            "name": "GEOGRAFÍA TURÍSTICA",
            "code": "680006"
        }, {
            "name": "IDIOMA EXTRANJERO: INGLÉS I",
            "code": "680004"
        }, {
            "name": "MARKETING TURÍSTICO I",
            "code": "680007"
        }, {
            "name": "CONTABILIDAD I",
            "code": "680011"
        }, {
            "name": "IDIOMA EXTRANJERO: INGLÉS II",
            "code": "680009"
        }, {
            "name": "MARKETING TURÍSTICO II",
            "code": "680012"
        }, {
            "name": "OPERACIONES Y PROCESOS DE PRODUCCIÓN I",
            "code": "680013"
        }, {
            "name": "ORGANIZACIÓN Y GESTIÓN DE RECURSOS HUMANOS",
            "code": "680010"
        }, {
            "name": "CONTABILIDAD II",
            "code": "680014"
        }, {
            "name": "LENGUA EXTRANJERA APLICADA AL TURISMO: ALEMÁN I",
            "code": "680016"
        }, {
            "name": "LENGUA EXTRANJERA APLICADA AL TURISMO: FRANCÉS I",
            "code": "680015"
        }, {
            "name": "OPERACIONES Y PROCESOS DE PRODUCCIÓN II",
            "code": "680017"
        }, {
            "name": "ANÁLISIS DEL ENTORNO ECONÓMICO DE LA EMPRESA TURÍSTICA",
            "code": "680021"
        }, {
            "name": "GESTIÓN FINANCIERA",
            "code": "680018"
        }, {
            "name": "LENGUA EXTRANJERA APLICADA AL TURISMO: ALEMÁN II",
            "code": "680019"
        }, {
            "name": "LENGUA EXTRANJERA APLICADA AL TURISMO: FRANCÉS II",
            "code": "680020"
        }, {
            "name": "PATRIMONIO I",
            "code": "680022"
        }, {
            "name": "CONTABILIDAD DE COSTES Y CONTROL DE GESTIÓN",
            "code": "680026"
        }, {
            "name": "DERECHO DE LA EMPRESA TURÍSTICA",
            "code": "680027"
        }, {
            "name": "PATRIMONIO II",
            "code": "680025"
        }, {
            "name": "RÉGIMEN FISCAL",
            "code": "680024"
        }, {
            "name": "TURISMO Y SOSTENIBILIDAD AMBIENTAL",
            "code": "680023"
        }, {
            "name": "PRÁCTICAS EXTERNAS",
            "code": "680028"
        }, {
            "name": "TRABAJO FIN DE GRADO",
            "code": "680029"
        }, {
            "name": "DERECHO INTERNACIONAL DEL TRABAJO",
            "code": "410034"
        }, {
            "name": "ALEMÁN DEL TURISMO",
            "code": "680055"
        }, {
            "name": "ANÁLISIS EMPÍRICO DEL MERCADO TURÍSTICO",
            "code": "680053"
        }, {
            "name": "ASPECTOS URBANOS Y ARQUITECTÓNICOS DE LA PLANIFICACIÓN TURÍSTICA",
            "code": "680048"
        }, {
            "name": "CARTOGRAFÍA TURÍSTICA",
            "code": "680054"
        }, {
            "name": "CULTURA ALIMENTARIA Y TURISMO",
            "code": "680057"
        }, {
            "name": "DERECHO DE LA CONTRATACIÓN",
            "code": "410026"
        }, {
            "name": "EXPRESIONES ARTÍSTICAS DE LA EDAD MODERNA",
            "code": "680056"
        }, {
            "name": "FRANCÉS DEL TURISMO",
            "code": "680051"
        }, {
            "name": "GESTIÓN HOTELERA",
            "code": "680037"
        }, {
            "name": "HERRAMIENTAS INFORMÁTICAS PARA EL ESTUDIO DEL MERCADO TURÍSTICO",
            "code": "680052"
        }, {
            "name": "POLÍTICA ECONÓMICA DEL TURISMO",
            "code": "680047"
        }, {
            "name": "PSICOLOGÍA SOCIAL DEL TURISMO",
            "code": "680043"
        }, {
            "name": "PUBLICIDAD, RELACIONES PUBLICAS Y PROMOCIÓN DE VENTAS EN EL SECTOR TURÍSTICO",
            "code": "680046"
        }, {
            "name": "REGÍMENES ESPECIALES DE TRIBUTACIÓN",
            "code": "410032"
        }, {
            "name": "SISTEMAS DE DISTRIBUCIÓN EN TURISMO: APLICACIÓN SAVIA AMADEUS",
            "code": "680042"
        }, {
            "name": "TALLER DE PAISAJE Y PLANIFICACIÓN TURÍSTICA",
            "code": "680058"
        }, {
            "name": "TURISMO Y DESARROLLO ECONÓMICO",
            "code": "680041"
        }, {
            "name": "DERECHO DE LA CONTRATACIÓN",
            "code": "410026"
        }]
    }, {
        "name": "Grado en Ciencia y Tecnología de la Edificación",
        "code": "G253",
        "school_code": "207",
        "school": "",
        "asignaturas": [{
            "name": "FUNDAMENTOS MATEMÁTICOS",
            "code": "253000"
        }, {
            "name": "EXPRESIÓN GRÁFICA I",
            "code": "253002"
        }, {
            "name": "FUNDAMENTOS FÍSICOS",
            "code": "253001"
        }, {
            "name": "GEOLOGÍA",
            "code": "253003"
        }, {
            "name": "CONSTRUCCIÓN I",
            "code": "253006"
        }, {
            "name": "EMPRESA",
            "code": "253007"
        }, {
            "name": "EXPRESIÓN GRÁFICA II",
            "code": "253004"
        }, {
            "name": "TOPOGRAFÍA",
            "code": "253005"
        }, {
            "name": "CONSTRUCCIÓN II",
            "code": "253012"
        }, {
            "name": "ESTRUCTURAS I",
            "code": "253010"
        }, {
            "name": "FUNDAMENTOS DE INSTALACIONES",
            "code": "253009"
        }, {
            "name": "GEOTECNIA Y CIMENTACIONES",
            "code": "253011"
        }, {
            "name": "MATERIALES I",
            "code": "253008"
        }, {
            "name": "DERECHO",
            "code": "253014"
        }, {
            "name": "ESTRUCTURAS II",
            "code": "253015"
        }, {
            "name": "INSTALACIONES",
            "code": "253013"
        }, {
            "name": "MATERIALES II",
            "code": "253016"
        }, {
            "name": "PRÁCTICAS DE CONSTRUCCIÓN",
            "code": "253017"
        }, {
            "name": "CONSTRUCCIÓN III",
            "code": "253021"
        }, {
            "name": "ORGANIZACIÓN Y GESTIÓN URBANÍSTICA",
            "code": "253020"
        }, {
            "name": "PRESUPUESTO Y CONTROL ECONÓMICO",
            "code": "253018"
        }, {
            "name": "SEGURIDAD Y PREVENCIÓN",
            "code": "253019"
        }, {
            "name": "CALIDAD",
            "code": "253023"
        }, {
            "name": "INTERVENCIÓN EN LA EDIFICACIÓN",
            "code": "253025"
        }, {
            "name": "PROYECTOS TÉCNICOS",
            "code": "253024"
        }, {
            "name": "VALORACIONES Y PERITACIONES",
            "code": "253022"
        }, {
            "name": "TRABAJO FIN DE GRADO",
            "code": "253042"
        }, {
            "name": "TRABAJO FIN DE GRADO (CIENCIA Y TECNOLOGÍA DE LA EDIFICACIÓN)",
            "code": "253041"
        }, {
            "name": "PRÁCTICAS EXTERNAS",
            "code": "253027"
        }, {
            "name": "DIAGNÓSTICO EN LA INTERVENCIÓN DEL PATRIMONIO CONSTRUIDO",
            "code": "253035"
        }, {
            "name": "DIRECCIÓN DE OBRA Y PRODUCCIÓN ECONÓMICA",
            "code": "253036"
        }, {
            "name": "REHABILITACIÓN MEDIOAMBIENTAL. MATERIALES Y SISTEMAS CONSTRUCTIVOS",
            "code": "253037"
        }, {
            "name": "TÉCNICAS DE INTERVENCIÓN EN EL PATRIMONIO CONSTRUIDO",
            "code": "253029"
        }, {
            "name": "INTERVENCIÓN EN LOS SISTEMAS ESTRUCTURALES DEL PATRIMONIO CONSTRUIDO",
            "code": "253034"
        }, {
            "name": "INTRODUCCIÓN  AL PROJECT & FACILITY MANAGENEMT",
            "code": "253038"
        }, {
            "name": "REHABILITACIÓN MEDIOAMBIENTAL Y EFICIENCIA ENERGÉTICA",
            "code": "253039"
        }]
    }, {
        "name": "Grado en Enfermería",
        "code": "G255",
        "school_code": "201",
        "school": "",
        "asignaturas": [{
            "name": "ANATOMÍA Y BIOLOGÍA HUMANA",
            "code": "255000"
        }, {
            "name": "BIOQUÍMICA",
            "code": "255001"
        }, {
            "name": "CIENCIAS PSICOSOCIALES APLICADAS Y COMUNICACIÓN",
            "code": "255003"
        }, {
            "name": "FISIOLOGÍA HUMANA",
            "code": "255002"
        }, {
            "name": "ESTADÍSTICA E INTRODUCCIÓN A LA INVESTIGACIÓN EN ENFERMERÍA",
            "code": "255004"
        }, {
            "name": "FISIOPATOLOGÍA",
            "code": "255005"
        }, {
            "name": "FUNDAMENTOS TEÓRICOS Y METODOLÓGICOS DE ENFERMERÍA",
            "code": "255006"
        }, {
            "name": "PRÁCTICAS CLÍNICAS I",
            "code": "255011"
        }, {
            "name": "CUIDADOS BÁSICOS PARA LA SALUD DE LA PERSONA, LA FAMILIA Y EL GRUPO",
            "code": "255009"
        }, {
            "name": "FARMACOLOGÍA",
            "code": "255007"
        }, {
            "name": "NUTRICIÓN Y DIETÉTICA",
            "code": "255008"
        }, {
            "name": "PROCESOS GENERALES EN ENFERMERÍA CLÍNICA",
            "code": "255010"
        }, {
            "name": "ENFERMERÍA CLÍNICA EN LA EDAD ADULTA. SITUACIONES AGUDAS Y DE EMERGENCIA",
            "code": "255013"
        }, {
            "name": "PRÁCTICAS CLÍNICAS II",
            "code": "255012"
        }, {
            "name": "SALUD COMUNITARIA Y ORGANIZACIÓN ENFERMERA EN LA COMUNIDAD",
            "code": "255014"
        }, {
            "name": "ATENCIÓN ENFERMERA AL DESARROLLO HUMANO CON UNA PERSPECTIVA DE GÉNERO",
            "code": "255016"
        }, {
            "name": "ENFERMERÍA CLÍNICA EN LA INFANCIA, ADOLESCENCIA Y ENVEJECIMIENTO",
            "code": "255015"
        }, {
            "name": "GESTIÓN DE SERVICIOS ENFERMEROS: LEGISLACIÓN Y DEONTOLOGÍA PROFESIONAL",
            "code": "255017"
        }, {
            "name": "ENFERMERÍA CLÍNICA EN LA EDAD ADULTA. PROCESOS CRÓNICOS, AVANZADOS Y TERMINALES",
            "code": "255019"
        }, {
            "name": "INSTRUMENTOS DEL CUIDADO ENFERMERO CON LA COMUNIDAD",
            "code": "255020"
        }, {
            "name": "PRACTICUM GENERAL I",
            "code": "255018"
        }, {
            "name": "PRACTICUM GENERAL II",
            "code": "255021"
        }, {
            "name": "PRACTICUM GENERAL II (1ª PARTE)",
            "code": "255032"
        }, {
            "name": "PRACTICUM ESPECÍFICO",
            "code": "255022"
        }, {
            "name": "TRABAJO FIN DE GRADO",
            "code": "255023"
        }, {
            "name": "RELACIÓN DE AYUDA Y COUNSELLING",
            "code": "255024"
        }, {
            "name": "SOCIOLOGÍA DE LA SALUD",
            "code": "255025"
        }, {
            "name": "TEORÍA Y METODOLOGÍA APLICADAS",
            "code": "255026"
        }, {
            "name": "ATENCIÓN ENFERMERA A PERSONAS EN SITUACIÓN DE DEPENDENCIA",
            "code": "255029"
        }, {
            "name": "CUIDADOS ENFERMEROS A PACIENTES EN SITUACIÓN CRÍTICA",
            "code": "255028"
        }, {
            "name": "ENFERMERÍA EN CUIDADOS PALIATIVOS",
            "code": "255030"
        }, {
            "name": "ENFERMERÍA EN SALUD ESCOLAR",
            "code": "255027"
        }]
    }, {
        "name": "Grado en Lenguas Modernas y Traducción (Guadalajara)",
        "code": "G440",
        "school_code": "106",
        "school": "",
        "asignaturas": [{
            "name": "ALEMÁN I",
            "code": "440000"
        }, {
            "name": "FRANCÉS I",
            "code": "440001"
        }, {
            "name": "HISTORIA DE LOS PAÍSES DE HABLA INGLESA",
            "code": "440002"
        }, {
            "name": "INGLÉS I",
            "code": "440003"
        }, {
            "name": "LENGUA ESPAÑOLA",
            "code": "440004"
        }, {
            "name": "ALEMÁN II",
            "code": "440006"
        }, {
            "name": "ANÁLISIS LITERARIO DE TEXTOS EN LENGUA INGLESA",
            "code": "440005"
        }, {
            "name": "FRANCÉS II",
            "code": "440007"
        }, {
            "name": "INGLÉS ACADÉMICO",
            "code": "440008"
        }, {
            "name": "INGLÉS II",
            "code": "440009"
        }, {
            "name": "ALEMÁN III",
            "code": "440010"
        }, {
            "name": "FRANCÉS III",
            "code": "440011"
        }, {
            "name": "INGLÉS III",
            "code": "440012"
        }, {
            "name": "INTRODUCCIÓN A LA TRADUCCIÓN (INGLÉS-ESPAÑOL)",
            "code": "440013"
        }, {
            "name": "LINGÜÍSTICA",
            "code": "440014"
        }, {
            "name": "ALEMÁN IV",
            "code": "440017"
        }, {
            "name": "CULTURAS Y CIVILIZACIONES DE LOS PAÍSES DE HABLA INGLESA",
            "code": "440015"
        }, {
            "name": "FRANCÉS IV",
            "code": "440018"
        }, {
            "name": "INGLÉS IV",
            "code": "440016"
        }, {
            "name": "FUNDAMENTOS DE LA TRADUCCIÓN",
            "code": "440019"
        }, {
            "name": "LENGUA ESPAÑOLA APLICADA A LA TRADUCCIÓN",
            "code": "440020"
        }, {
            "name": "TERMINOLOGÍA APLICADA A LA TRADUCCIÓN",
            "code": "440021"
        }, {
            "name": "TRADUCCIÓN ESPECIALIZADA (CIENTÍFICO - TÉCNICA)",
            "code": "440022"
        }, {
            "name": "GESTIÓN DE PROYECTOS DE TRADUCCIÓN",
            "code": "440025"
        }, {
            "name": "HERRAMIENTAS INFORMÁTICAS APLICADAS A LA TRADUCCIÓN",
            "code": "440023"
        }, {
            "name": "TRADUCCIÓN ESPECIALIZADA (JURÍDICO - ECONÓMICA)",
            "code": "440024"
        }, {
            "name": "PRÁCTICAS EXTERNAS",
            "code": "440026"
        }, {
            "name": "TRABAJO FIN DE GRADO",
            "code": "440027"
        }, {
            "name": "TRADUCCIÓN ESPECIALIZADA ALEMÁN/ESPAÑOL",
            "code": "440034"
        }, {
            "name": "TRADUCCIÓN ESPECIALIZADA ALEMÁN/ESPAÑOL",
            "code": "791021"
        }, {
            "name": "TRADUCCIÓN ESPECIALIZADA FRANCÉS/ESPAÑOL: CAMPOS Y HERRAMIENTAS",
            "code": "791020"
        }, {
            "name": "TRADUCCIÓN ESPECIALIZADA FRANCÉS/ESPAÑOL: CAMPOS Y HERRAMIENTAS",
            "code": "440035"
        }, {
            "name": "APROXIMACIÓN A LA TRADUCCIÓN LITERARIA",
            "code": "440032"
        }, {
            "name": "ARGUMENTACIÓN Y PERSUASIÓN EN INGLÉS",
            "code": "251050"
        }, {
            "name": "BILINGÜISMO",
            "code": "251049"
        }, {
            "name": "GÉNERO, RAZA Y NATURALEZA EN LA LITERATURA CONTEMPORÁNEA EN LENGUA INGLESA",
            "code": "251040"
        }, {
            "name": "HERRAMIENTAS COMPUTACIONALES APLICADAS A LA INVESTIGACIÓN LINGÜÍSTICA",
            "code": "251043"
        }, {
            "name": "INTRODUCCIÓN A LA INTERPRETACIÓN",
            "code": "440031"
        }, {
            "name": "LITERATURA MEDIEVAL INGLESA",
            "code": "251048"
        }, {
            "name": "LITERATURA POSTCOLONIAL EN LENGUA INGLESA",
            "code": "251041"
        }, {
            "name": "LOCALIZACIÓN, TECNOLOGÍA Y TRADUCCIÓN",
            "code": "791016"
        }, {
            "name": "PRAGMÁTICA DE LA LENGUA INGLESA",
            "code": "251042"
        }, {
            "name": "TEORÍA E HISTORIA DEL TEATRO EN LENGUA INGLESA",
            "code": "251024"
        }, {
            "name": "TRADUCCIÓN AUDIOVISUAL",
            "code": "791015"
        }, {
            "name": "TRADUCCIÓN INSTITUCIONAL",
            "code": "440033"
        }, {
            "name": "TRADUCCIÓN LITERARIA, EDICIÓN Y CORRECCIÓN DE TEXTOS",
            "code": "791014"
        }, {
            "name": "TRADUCCIÓN GENERAL ALEMÁN-ESPAÑOL",
            "code": "791012"
        }, {
            "name": "SOCIOLINGÜISTICA DEL INGLÉS",
            "code": "251034"
        }, {
            "name": "TRADUCCIÓN GENERAL FRANCÉS-ESPAÑOL",
            "code": "791011"
        }, {
            "name": "DIDÁCTICA DEL INGLÉS COMO LENGUA EXTRANJERA Y SUS APLICACIONES INFORMÁTICAS",
            "code": "251051"
        }, {
            "name": "GRANDES OBRAS DE LA LITERATURA EN LENGUA INGLESA",
            "code": "251016"
        }, {
            "name": "LA MALDAD EN EL ANÁLISIS DE LA FICCIÓN",
            "code": "251046"
        }, {
            "name": "LA TRADUCCIÓN DE ASPECTOS PRAGMÁTICO-DISCURSIVOS",
            "code": "791022"
        }, {
            "name": "LINGÜÍSTICA COGNITIVA",
            "code": "251047"
        }, {
            "name": "POESÍA NORTEAMERICANA CONTEMPORÁNEA",
            "code": "251045"
        }, {
            "name": "SÁTIRA LITERARIA EN LENGUA INGLESA",
            "code": "251044"
        }, {
            "name": "TRADUCCIÓN EN LOS MEDIOS DE COMUNICACIÓN",
            "code": "440028"
        }, {
            "name": "TRADUCCIÓN GENERAL ALEMÁN-ESPAÑOL",
            "code": "440030"
        }, {
            "name": "TRADUCCIÓN GENERAL E INTERCULTURALIDAD FRANCÉS-ESPAÑOL",
            "code": "440029"
        }]
    }, {
        "name": "Grado en Comunicación Audiovisual",
        "code": "G641",
        "school_code": "109",
        "school": "",
        "asignaturas": [{
            "name": "COMUNICACIÓN LINGÜÍSTICA",
            "code": "641001"
        }, {
            "name": "HISTORIA Y CULTURA DEL MUNDO CONTEMPORÁNEO",
            "code": "641000"
        }, {
            "name": "IDEACIÓN GRÁFICA",
            "code": "641004"
        }, {
            "name": "LENGUAJE AUDIOVISUAL",
            "code": "641003"
        }, {
            "name": "TEORÍAS DE LA COMUNICACIÓN",
            "code": "641002"
        }, {
            "name": "CONSTRUCCIÓN DEL CONOCIMIENTO EN LA SOCIEDAD DE LA INFORMACIÓN",
            "code": "641007"
        }, {
            "name": "EMPRESA AUDIOVISUAL",
            "code": "641006"
        }, {
            "name": "FUENTES DE DOCUMENTACIÓN E INFORMACIÓN",
            "code": "641005"
        }, {
            "name": "TECNOLOGÍA DE LOS MEDIOS AUDIOVISUALES",
            "code": "641008"
        }, {
            "name": "COMUNICACIÓN Y PROCESOS CREATIVOS",
            "code": "641009"
        }, {
            "name": "EXPRESIÓN ORAL Y ESCRITA",
            "code": "641013"
        }, {
            "name": "INVESTIGACIÓN DE AUDIENCIAS",
            "code": "641011"
        }, {
            "name": "NARRATIVA AUDIOVISUAL",
            "code": "641012"
        }, {
            "name": "SOCIOECONOMÍA DE LAS INDUSTRIAS CULTURALES",
            "code": "641010"
        }, {
            "name": "CULTURA VISUAL",
            "code": "641014"
        }, {
            "name": "ESTÉTICA DE LA EXPRESIÓN AUDIOVISUAL",
            "code": "641017"
        }, {
            "name": "MEDIOS DE COMUNICACIÓN EN EL CONTEXTO INTERNACIONAL",
            "code": "641016"
        }, {
            "name": "UNA APROXIMACIÓN COMPARATIVA E HISTÓRICA AL ESTUDIO DE LOS MEDIOS",
            "code": "641015"
        }, {
            "name": "GESTIÓN DE CONTENIDOS Y PROGRAMACIÓN AUDIOVISUAL",
            "code": "641021"
        }, {
            "name": "GUIÓN AUDIOVISUAL",
            "code": "641018"
        }, {
            "name": "PRODUCCIÓN AUDIOVISUAL",
            "code": "641020"
        }, {
            "name": "REALIZACIÓN AUDIOVISUAL",
            "code": "641019"
        }, {
            "name": "ÉTICA Y DEONTOLOGÍA PROFESIONAL",
            "code": "641022"
        }, {
            "name": "LA COMUNICACIÓN EN ENTORNOS VIRTUALES",
            "code": "641023"
        }, {
            "name": "POST PRODUCCIÓN AUDIOVISUAL",
            "code": "641024"
        }, {
            "name": "PRÁCTICAS EXTERNAS",
            "code": "641025"
        }, {
            "name": "TRABAJO FIN DE GRADO",
            "code": "641026"
        }, {
            "name": "COMUNICACIÓN AUDIOVISUAL EN LA RED",
            "code": "641027"
        }, {
            "name": "COMUNICACIÓN SONORA EN EL AUDIOVISUAL",
            "code": "641044"
        }, {
            "name": "ETNOGRAFÍA AUDIOVISUAL",
            "code": "641037"
        }, {
            "name": "GÉNEROS Y FORMATOS DE CINE Y TV",
            "code": "641031"
        }, {
            "name": "MOBILITY AND AUDIOVISUAL COMMUNICATION",
            "code": "641036"
        }, {
            "name": "NUEVOS FORMATOS DIGITALES",
            "code": "641038"
        }, {
            "name": "PRODUCCIÓN Y REALIZACIÓN DE LARGOMETRAJES DE FICCIÓN",
            "code": "641041"
        }, {
            "name": "PRODUCCIÓN Y REALIZACIÓN DE PUBLICIDAD AUDIOVISUAL",
            "code": "641042"
        }, {
            "name": "PROGRAMACIÓN EN CONTEXTOS INTERACTIVOS",
            "code": "641039"
        }, {
            "name": "TÉCNICAS DE ESCRITURA DEL GUIÓN DE FICCIÓN",
            "code": "641040"
        }, {
            "name": "TÉCNICAS DE PRESENTACIÓN Y LOCUCIÓN",
            "code": "641032"
        }, {
            "name": "VIDEOJUEGOS: CONTENIDOS, INDUSTRIA Y POLÍTICAS",
            "code": "641035"
        }, {
            "name": "ANIMACIÓN 3D",
            "code": "641029"
        }, {
            "name": "DISEÑO GRÁFICO DIGITAL",
            "code": "641028"
        }, {
            "name": "GUIÓN Y DISEÑO DE VIDEOJUEGOS",
            "code": "641030"
        }, {
            "name": "PRODUCCIÓN Y REALIZACIÓN DE DOCUMENTALES",
            "code": "641034"
        }, {
            "name": "PROGRAMAS EN DIRECTO Y LA REALIZACIÓN MULTICÁMARAS",
            "code": "641043"
        }, {
            "name": "REALIZACIÓN DE INFORMATIVOS EN RADIO Y TELEVISIÓN",
            "code": "641033"
        }]
    }, {
        "name": "Grado en Psicología",
        "code": "G562",
        "school_code": "204",
        "school": "",
        "asignaturas": [{
            "name": "FUNDAMENTOS DE PSICOBIOLOGÍA",
            "code": "562001"
        }, {
            "name": "MÉTODOS DE INVESTIGACIÓN EN PSICOLOGÍA",
            "code": "562004"
        }, {
            "name": "MOTIVACIÓN Y EMOCIÓN",
            "code": "562003"
        }, {
            "name": "PSICOLOGÍA DE LA PERSONALIDAD",
            "code": "562002"
        }, {
            "name": "PSICOLOGÍA: HISTORIA, CIENCIA Y PROFESIÓN",
            "code": "562000"
        }, {
            "name": "ANÁLISIS DE DATOS EN PSICOLOGÍA",
            "code": "562008"
        }, {
            "name": "NEUROCIENCIA DE LA CONDUCTA",
            "code": "562006"
        }, {
            "name": "PSICOLOGÍA DEL APRENDIZAJE",
            "code": "562005"
        }, {
            "name": "PSICOLOGÍA DEL CICLO VITAL I",
            "code": "562009"
        }, {
            "name": "PSICOLOGÍA SOCIAL",
            "code": "562007"
        }]
    }, {
        "name": "Grado en Educación Infantil (C. Adaptación)",
        "code": "G5001",
        "school_code": "204",
        "school": "",
        "asignaturas": [{
            "name": "COMUNICACIÓN Y MEDIOS SOCIOCULTURALES : ENSEÑANZA Y APRENDIZAJE",
            "code": "510000"
        }, {
            "name": "DIDÁCTICA",
            "code": "510001"
        }, {
            "name": "EVOLUCIÓN HISTÓRICA Y SISTEMAS CONTEMPORÁNEOS DE EDUCACIÓN INFANTIL",
            "code": "510002"
        }, {
            "name": "FILOSOFÍA, ÉTICA Y EDUCACIÓN MORAL",
            "code": "510003"
        }, {
            "name": "PSICOLOGÍA DEL DESARROLLO",
            "code": "510004"
        }, {
            "name": "DIAGNÓSTICO PEDAGÓGICO Y TÉCNICAS DE OBSERVACIÓN EN EL AULA DE EDUCACIÓN INFANTIL",
            "code": "510005"
        }, {
            "name": "ORGANIZACIÓN DE LAS INSTITUCIONES EDUCATIVAS",
            "code": "510006"
        }, {
            "name": "ORIENTACIÓN E INTERVENCIÓN TUTORIAL",
            "code": "510007"
        }, {
            "name": "PSICOLOGÍA DE LA EDUCACIÓN",
            "code": "510008"
        }, {
            "name": "SOCIOLOGÍA DE LA EDUCACIÓN",
            "code": "510009"
        }, {
            "name": "FUNDAMENTOS PSICOLÓGICOS DE ATENCIÓN A LA DIVERSIDAD",
            "code": "510010"
        }, {
            "name": "LENGUA EXTRANJERA PARA EDUCACIÓN INFANTIL",
            "code": "510011"
        }, {
            "name": "PRÁCTICUM I",
            "code": "510012"
        }, {
            "name": "PROMOCIÓN DE LA SALUD Y HÁBITOS SALUDABLES",
            "code": "510013"
        }, {
            "name": "ATENCIÓN TEMPRANA: FUNDAMENTOS Y RECURSOS",
            "code": "510014"
        }, {
            "name": "EL JUEGO MUSICAL: EXPRESIÓN Y PERCEPCIÓN",
            "code": "510015"
        }, {
            "name": "LA INNOVACIÓN EDUCATIVA",
            "code": "510016"
        }, {
            "name": "PROCESOS DE APRENDIZAJE: DESARROLLO DE LAS HABILIDADES COMUNICATIVAS",
            "code": "510017"
        }, {
            "name": "PSICOLOGÍA Y CONTEXTOS EDUCATIVOS",
            "code": "510018"
        }, {
            "name": "ARTES PLÁSTICAS Y VISUALES EN EDUCACIÓN INFANTIL",
            "code": "510019"
        }, {
            "name": "ENSEÑANZA Y APRENDIZAJE DE LAS CIENCIAS DE LA NATURALEZA",
            "code": "510020"
        }, {
            "name": "ENSEÑANZA Y APRENDIZAJE DE LAS CIENCIAS SOCIALES",
            "code": "510021"
        }, {
            "name": "ENSEÑANZA Y APRENDIZAJE DE LAS MATEMÁTICAS",
            "code": "510022"
        }, {
            "name": "PRÁCTICUM II",
            "code": "510023"
        }, {
            "name": "PSICOMOTRICIDAD INFANTIL",
            "code": "510024"
        }, {
            "name": "DIDÁCTICA DE LA LENGUA ESPAÑOLA Y DE LA LITERATURA",
            "code": "510025"
        }, {
            "name": "PROYECTOS PARA LA EXPRESIÓN INTEGRAL EN INFANTIL",
            "code": "510026"
        }, {
            "name": "PRÁCTICUM III",
            "code": "510027"
        }, {
            "name": "TRABAJO FIN DE GRADO",
            "code": "510028"
        }, {
            "name": "ACCIÓN TUTORIAL Y ORIENTACIÓN FAMILIAR (Complemento Formativo del C.A.G)",
            "code": "500004"
        }, {
            "name": "APROXIMACIÓN PRÁCTICA A LAS CULTURAS DE HABLA INGLESA",
            "code": "510044"
        }, {
            "name": "ATENCIÓN TEMPRANA: DIAGNÓSTICO E INTERVENCIÓN (Complemento Formativo del C.A.G)",
            "code": "500003"
        }, {
            "name": "EDUCACIÓN PARA LA SALUD (Complemento Formativo del C.A.G)",
            "code": "500001"
        }, {
            "name": "INTRODUCCIÓN AL PENSAMIENTO CRÍTICO (Complemento Formativo del C.A.G)",
            "code": "500000"
        }, {
            "name": "LENGUA EXTRANJERA EN EL AULA DE EDUCACIÓN INFANTIL (Complemento Formativo del C.A.G)",
            "code": "500002"
        }, {
            "name": "DETECCIÓN E INTERVENCIÓN EDUCATIVA EN DIFICULTADES DE EXPRESIÓN Y COMUNICACIÓN",
            "code": "510034"
        }, {
            "name": "EL DESARROLLO DE HABILIDADES COMUNICATIVAS PRODUCTIVAS EN LENGUA INGLESA",
            "code": "510031"
        }, {
            "name": "EL MENSAJE CRISTIANO",
            "code": "510036"
        }, {
            "name": "LECTOESCRITURA DE LA LENGUA INGLESA PARA EDUCACIÓN INFANTIL",
            "code": "510032"
        }, {
            "name": "RELIGIÓN, CULTURA Y VALORES",
            "code": "510035"
        }]
    }, {
        "name": "Grado en Educación Primaria (C. Adaptación)",
        "code": "G550",
        "school_code": "204",
        "school": "",
        "asignaturas": [{
            "name": "COMUNICACIÓN Y MEDIOS SOCIOCULTURALES : ENSEÑANZA Y APRENDIZAJE",
            "code": "510000"
        }, {
            "name": "DIDÁCTICA",
            "code": "510001"
        }, {
            "name": "FILOSOFÍA, ÉTICA Y EDUCACIÓN MORAL",
            "code": "510003"
        }, {
            "name": "PROCESOS DE APRENDIZAJE:DESARROLLO DE LAS HABILIDADES COMUNICATIVAS",
            "code": "520000"
        }, {
            "name": "PSICOLOGÍA DEL DESARROLLO",
            "code": "510004"
        }, {
            "name": "GEOGRAFÍA GENERAL",
            "code": "520001"
        }, {
            "name": "LENGUA ESPAÑOLA Y SU DIDÁCTICA",
            "code": "520002"
        }, {
            "name": "ORGANIZACIÓN DE LAS INSTITUCIONES EDUCATIVAS",
            "code": "510006"
        }, {
            "name": "PSICOLOGÍA DE LA EDUCACIÓN",
            "code": "510008"
        }, {
            "name": "SOCIOLOGÍA DE LA EDUCACIÓN",
            "code": "510009"
        }, {
            "name": "FORMACIÓN VOCAL E INSTRUMENTAL: RECURSOS DIDÁCTICOS",
            "code": "520003"
        }, {
            "name": "FUNDAMENTOS PSICOLÓGICOS DE ATENCIÓN A LA DIVERSIDAD",
            "code": "510010"
        }, {
            "name": "LENGUA EXTRANJERA I",
            "code": "520004"
        }, {
            "name": "MATEMÁTICAS I",
            "code": "520005"
        }, {
            "name": "PRÁCTICUM I",
            "code": "520006"
        }, {
            "name": "CIENCIAS DE LA MATERIA Y DE LA ENERGÍA",
            "code": "520008"
        }, {
            "name": "CIENCIAS DE LA TIERRA Y DE LA VIDA",
            "code": "520009"
        }, {
            "name": "LA INNOVACIÓN EDUCATIVA: PERSPECTIVAS CONTEMPORÁNEAS",
            "code": "520007"
        }, {
            "name": "LENGUA EXTRANJERA II",
            "code": "520010"
        }, {
            "name": "DIDÁCTICA DE LAS CIENCIAS DE LA NATURALEZA",
            "code": "520011"
        }, {
            "name": "DIDÁCTICA DE LAS CIENCIAS SOCIALES",
            "code": "520012"
        }, {
            "name": "EL LENGUAJE PLÁSTICO Y VISUAL:RECURSOS Y APLICACIONES",
            "code": "520013"
        }, {
            "name": "LITERATURA ESPAÑOLA Y SU DIDÁCTICA",
            "code": "520014"
        }, {
            "name": "MATEMÁTICAS II",
            "code": "520015"
        }, {
            "name": "DIDÁCTICA DE LAS MATEMÁTICAS",
            "code": "520016"
        }, {
            "name": "HISTORIA DE ESPAÑA",
            "code": "520017"
        }, {
            "name": "PRÁCTICUM II",
            "code": "520018"
        }, {
            "name": "PRÁCTICUM III",
            "code": "520020"
        }, {
            "name": "PRACTICUM III (LENGUA EXTRANJERA PARA EDUCACIÓN PRIMARIA",
            "code": "520023"
        }, {
            "name": "TRABAJO FIN DE GRADO",
            "code": "520021"
        }, {
            "name": "APROXIMACIÓN PRÁCTICA A LAS CULTURAS DE HABLA INGLESA",
            "code": "510044"
        }, {
            "name": "DISEÑO E IMPLEMENTACIÓN DE ACTIVIDADES CLIC EN EDUCACIÓN PRIMARIA",
            "code": "520026"
        }, {
            "name": "EL MENSAJE CRISTIANO",
            "code": "510036"
        }, {
            "name": "INTRODUCCIÓN A LA LITERATURA INFANTIL EN LENGUA INGLESA",
            "code": "520025"
        }, {
            "name": "EL DESARROLLO DE HABILIDADES COMUNICATIVAS PRODUCTIVAS EN LENGUA INGLESA",
            "code": "510031"
        }, {
            "name": "EL MENSAJE CRISTIANO",
            "code": "510036"
        }, {
            "name": "INTERVENCIÓN EDUCATIVA EN DISCAPACIDAD INTELECTUAL, ALTAS CAPACIDADES Y TGD",
            "code": "510033"
        }, {
            "name": "RELIGIÓN, CULTURA Y VALORES",
            "code": "510035"
        }, {
            "name": "AMPLIACIÓN DE LA LENGUA EXTRANJERA (Complemento Formativo del C.A.G)",
            "code": "550003"
        }, {
            "name": "HABILIDADES LINGÜÍSTICAS Y COMUNICATIVAS (Complemento Formativo del C.A.G)",
            "code": "550000"
        }, {
            "name": "INNOVACIÓN Y CALIDAD EN LA ESCUELA  (Complemento Formativo del C.A.G)",
            "code": "550001"
        }, {
            "name": "INTRODUCCIÓN AL PENSAMIENTO CRÍTICO (Complemento Formativo del C.A.G)",
            "code": "500000"
        }, {
            "name": "LA ENSEÑANZA DE LA MATEMÁTICA EN EDUCACIÓN PRIMARIA (Complemento Formativo del C.A.G)",
            "code": "550005"
        }, {
            "name": "LA ENSEÑANZA DEL MEDIO EN EDUCACIÓN PRIMARIA (Complemento Formativo del C.A.G)",
            "code": "550004"
        }, {
            "name": "PERCEPCIÓN Y EXPRESIÓN MUSICAL  (Complemento Formativo del C.A.G)",
            "code": "550002"
        }, {
            "name": "INTERVENCIÓN EDUCATIVA EN DISCAPACIDAD INTELECTUAL, ALTAS CAPACIDADES Y TGD",
            "code": "510033"
        }]
    }, {
        "name": "Grado en Educación Infantil (Semipresencial)",
        "code": "G500",
        "school_code": "204",
        "school": "",
        "asignaturas": [{
            "name": "COMUNICACIÓN Y MEDIOS SOCIOCULTURALES : ENSEÑANZA Y APRENDIZAJE",
            "code": "510000"
        }, {
            "name": "DIDÁCTICA",
            "code": "510001"
        }, {
            "name": "EVOLUCIÓN HISTÓRICA Y SISTEMAS CONTEMPORÁNEOS DE EDUCACIÓN INFANTIL",
            "code": "510002"
        }, {
            "name": "FILOSOFÍA, ÉTICA Y EDUCACIÓN MORAL",
            "code": "510003"
        }, {
            "name": "PSICOLOGÍA DEL DESARROLLO",
            "code": "510004"
        }, {
            "name": "DIAGNÓSTICO PEDAGÓGICO Y TÉCNICAS DE OBSERVACIÓN EN EL AULA DE EDUCACIÓN INFANTIL",
            "code": "510005"
        }, {
            "name": "ORGANIZACIÓN DE LAS INSTITUCIONES EDUCATIVAS",
            "code": "510006"
        }, {
            "name": "ORIENTACIÓN E INTERVENCIÓN TUTORIAL",
            "code": "510007"
        }, {
            "name": "PSICOLOGÍA DE LA EDUCACIÓN",
            "code": "510008"
        }, {
            "name": "SOCIOLOGÍA DE LA EDUCACIÓN",
            "code": "510009"
        }, {
            "name": "FUNDAMENTOS PSICOLÓGICOS DE ATENCIÓN A LA DIVERSIDAD",
            "code": "510010"
        }, {
            "name": "LENGUA EXTRANJERA PARA EDUCACIÓN INFANTIL",
            "code": "510011"
        }, {
            "name": "PRÁCTICUM I",
            "code": "510012"
        }, {
            "name": "PROMOCIÓN DE LA SALUD Y HÁBITOS SALUDABLES",
            "code": "510013"
        }, {
            "name": "ATENCIÓN TEMPRANA: FUNDAMENTOS Y RECURSOS",
            "code": "510014"
        }, {
            "name": "EL JUEGO MUSICAL: EXPRESIÓN Y PERCEPCIÓN",
            "code": "510015"
        }, {
            "name": "LA INNOVACIÓN EDUCATIVA",
            "code": "510016"
        }, {
            "name": "PROCESOS DE APRENDIZAJE: DESARROLLO DE LAS HABILIDADES COMUNICATIVAS",
            "code": "510017"
        }, {
            "name": "PSICOLOGÍA Y CONTEXTOS EDUCATIVOS",
            "code": "510018"
        }, {
            "name": "ARTES PLÁSTICAS Y VISUALES EN EDUCACIÓN INFANTIL",
            "code": "510019"
        }, {
            "name": "ENSEÑANZA Y APRENDIZAJE DE LAS CIENCIAS DE LA NATURALEZA",
            "code": "510020"
        }, {
            "name": "ENSEÑANZA Y APRENDIZAJE DE LAS CIENCIAS SOCIALES",
            "code": "510021"
        }, {
            "name": "ENSEÑANZA Y APRENDIZAJE DE LAS MATEMÁTICAS",
            "code": "510022"
        }, {
            "name": "PRÁCTICUM II",
            "code": "510023"
        }, {
            "name": "PSICOMOTRICIDAD INFANTIL",
            "code": "510024"
        }, {
            "name": "DIDÁCTICA DE LA LENGUA ESPAÑOLA Y DE LA LITERATURA",
            "code": "510025"
        }, {
            "name": "PROYECTOS PARA LA EXPRESIÓN INTEGRAL EN INFANTIL",
            "code": "510026"
        }, {
            "name": "PRÁCTICUM III",
            "code": "510027"
        }, {
            "name": "TRABAJO FIN DE GRADO",
            "code": "510028"
        }, {
            "name": "ACCIÓN TUTORIAL Y ORIENTACIÓN FAMILIAR (Complemento Formativo del C.A.G)",
            "code": "500004"
        }, {
            "name": "APROXIMACIÓN PRÁCTICA A LAS CULTURAS DE HABLA INGLESA",
            "code": "510044"
        }, {
            "name": "ATENCIÓN TEMPRANA: DIAGNÓSTICO E INTERVENCIÓN (Complemento Formativo del C.A.G)",
            "code": "500003"
        }, {
            "name": "EDUCACIÓN PARA LA SALUD (Complemento Formativo del C.A.G)",
            "code": "500001"
        }, {
            "name": "INTRODUCCIÓN AL PENSAMIENTO CRÍTICO (Complemento Formativo del C.A.G)",
            "code": "500000"
        }, {
            "name": "LENGUA EXTRANJERA EN EL AULA DE EDUCACIÓN INFANTIL (Complemento Formativo del C.A.G)",
            "code": "500002"
        }, {
            "name": "DETECCIÓN E INTERVENCIÓN EDUCATIVA EN DIFICULTADES DE EXPRESIÓN Y COMUNICACIÓN",
            "code": "510034"
        }, {
            "name": "EL DESARROLLO DE HABILIDADES COMUNICATIVAS PRODUCTIVAS EN LENGUA INGLESA",
            "code": "510031"
        }, {
            "name": "EL MENSAJE CRISTIANO",
            "code": "510036"
        }, {
            "name": "LECTOESCRITURA DE LA LENGUA INGLESA PARA EDUCACIÓN INFANTIL",
            "code": "510032"
        }, {
            "name": "RELIGIÓN, CULTURA Y VALORES",
            "code": "510035"
        }]
    }, {
        "name": "Grado en Educación Primaria (Semipresencial)",
        "code": "G5501",
        "school_code": "204",
        "school": "",
        "asignaturas": [{
            "name": "COMUNICACIÓN Y MEDIOS SOCIOCULTURALES : ENSEÑANZA Y APRENDIZAJE",
            "code": "510000"
        }, {
            "name": "DIDÁCTICA",
            "code": "510001"
        }, {
            "name": "FILOSOFÍA, ÉTICA Y EDUCACIÓN MORAL",
            "code": "510003"
        }, {
            "name": "PROCESOS DE APRENDIZAJE:DESARROLLO DE LAS HABILIDADES COMUNICATIVAS",
            "code": "520000"
        }, {
            "name": "PSICOLOGÍA DEL DESARROLLO",
            "code": "510004"
        }, {
            "name": "GEOGRAFÍA GENERAL",
            "code": "520001"
        }, {
            "name": "LENGUA ESPAÑOLA Y SU DIDÁCTICA",
            "code": "520002"
        }, {
            "name": "ORGANIZACIÓN DE LAS INSTITUCIONES EDUCATIVAS",
            "code": "510006"
        }, {
            "name": "PSICOLOGÍA DE LA EDUCACIÓN",
            "code": "510008"
        }, {
            "name": "SOCIOLOGÍA DE LA EDUCACIÓN",
            "code": "510009"
        }, {
            "name": "FORMACIÓN VOCAL E INSTRUMENTAL: RECURSOS DIDÁCTICOS",
            "code": "520003"
        }, {
            "name": "FUNDAMENTOS PSICOLÓGICOS DE ATENCIÓN A LA DIVERSIDAD",
            "code": "510010"
        }, {
            "name": "LENGUA EXTRANJERA I",
            "code": "520004"
        }, {
            "name": "MATEMÁTICAS I",
            "code": "520005"
        }, {
            "name": "PRÁCTICUM I",
            "code": "520006"
        }, {
            "name": "CIENCIAS DE LA MATERIA Y DE LA ENERGÍA",
            "code": "520008"
        }, {
            "name": "CIENCIAS DE LA TIERRA Y DE LA VIDA",
            "code": "520009"
        }, {
            "name": "LA INNOVACIÓN EDUCATIVA: PERSPECTIVAS CONTEMPORÁNEAS",
            "code": "520007"
        }, {
            "name": "LENGUA EXTRANJERA II",
            "code": "520010"
        }, {
            "name": "DIDÁCTICA DE LAS CIENCIAS DE LA NATURALEZA",
            "code": "520011"
        }, {
            "name": "DIDÁCTICA DE LAS CIENCIAS SOCIALES",
            "code": "520012"
        }, {
            "name": "EL LENGUAJE PLÁSTICO Y VISUAL:RECURSOS Y APLICACIONES",
            "code": "520013"
        }, {
            "name": "LITERATURA ESPAÑOLA Y SU DIDÁCTICA",
            "code": "520014"
        }, {
            "name": "MATEMÁTICAS II",
            "code": "520015"
        }, {
            "name": "DIDÁCTICA DE LAS MATEMÁTICAS",
            "code": "520016"
        }, {
            "name": "HISTORIA DE ESPAÑA",
            "code": "520017"
        }, {
            "name": "PRÁCTICUM II",
            "code": "520018"
        }, {
            "name": "PRÁCTICUM III",
            "code": "520020"
        }, {
            "name": "PRACTICUM III (LENGUA EXTRANJERA PARA EDUCACIÓN PRIMARIA",
            "code": "520023"
        }, {
            "name": "TRABAJO FIN DE GRADO",
            "code": "520021"
        }, {
            "name": "APROXIMACIÓN PRÁCTICA A LAS CULTURAS DE HABLA INGLESA",
            "code": "510044"
        }, {
            "name": "DISEÑO E IMPLEMENTACIÓN DE ACTIVIDADES CLIC EN EDUCACIÓN PRIMARIA",
            "code": "520026"
        }, {
            "name": "EL MENSAJE CRISTIANO",
            "code": "510036"
        }, {
            "name": "INTRODUCCIÓN A LA LITERATURA INFANTIL EN LENGUA INGLESA",
            "code": "520025"
        }, {
            "name": "EL DESARROLLO DE HABILIDADES COMUNICATIVAS PRODUCTIVAS EN LENGUA INGLESA",
            "code": "510031"
        }, {
            "name": "EL MENSAJE CRISTIANO",
            "code": "510036"
        }, {
            "name": "INTERVENCIÓN EDUCATIVA EN DISCAPACIDAD INTELECTUAL, ALTAS CAPACIDADES Y TGD",
            "code": "510033"
        }, {
            "name": "RELIGIÓN, CULTURA Y VALORES",
            "code": "510035"
        }, {
            "name": "AMPLIACIÓN DE LA LENGUA EXTRANJERA (Complemento Formativo del C.A.G)",
            "code": "550003"
        }, {
            "name": "HABILIDADES LINGÜÍSTICAS Y COMUNICATIVAS (Complemento Formativo del C.A.G)",
            "code": "550000"
        }, {
            "name": "INNOVACIÓN Y CALIDAD EN LA ESCUELA  (Complemento Formativo del C.A.G)",
            "code": "550001"
        }, {
            "name": "INTRODUCCIÓN AL PENSAMIENTO CRÍTICO (Complemento Formativo del C.A.G)",
            "code": "500000"
        }, {
            "name": "LA ENSEÑANZA DE LA MATEMÁTICA EN EDUCACIÓN PRIMARIA (Complemento Formativo del C.A.G)",
            "code": "550005"
        }, {
            "name": "LA ENSEÑANZA DEL MEDIO EN EDUCACIÓN PRIMARIA (Complemento Formativo del C.A.G)",
            "code": "550004"
        }, {
            "name": "PERCEPCIÓN Y EXPRESIÓN MUSICAL  (Complemento Formativo del C.A.G)",
            "code": "550002"
        }, {
            "name": "INTERVENCIÓN EDUCATIVA EN DISCAPACIDAD INTELECTUAL, ALTAS CAPACIDADES Y TGD",
            "code": "510033"
        }]
    }, {
        "name": "Grado en Educación Social (C. Adaptación)",
        "code": "G561",
        "school_code": "204",
        "school": "",
        "asignaturas": [{
            "name": "MÉTODOS Y TÉCNICAS DE INVESTIGACIÓN EN CIENCAS SOCIALES",
            "code": "560011"
        }, {
            "name": "PLANIFICACIÓN Y GESTIÓN DE PROGRAMAS,CENTROS Y RECURSOS SOCIALES",
            "code": "560010"
        }, {
            "name": "ACOMPAÑAMIENTO Y MEDIACIÓN",
            "code": "560013"
        }, {
            "name": "INMIGRACIÓN Y DIVERSIDAD CULTURAL",
            "code": "560016"
        }, {
            "name": "TÉCNICAS DE MODIFICACIÓN DE CONDUCTA",
            "code": "560014"
        }, {
            "name": "TRABAJO FIN DE GRADO",
            "code": "560032"
        }, {
            "name": "TRABAJO FIN DE GRADO",
            "code": "560027"
        }, {
            "name": "ÁREAS EMERGENTES EN LA ACCIÓN SOCIOEDUCATIVA",
            "code": "561000"
        }, {
            "name": "COMPETENCIAS Y HABILIDADES SOCIALES",
            "code": "561002"
        }, {
            "name": "POLÍTICAS SOCIALES EN EL MUNDO GLOBALIZADO",
            "code": "561001"
        }]
    }, {
        "name": "Grado en Educación Infantil",
        "code": "G510",
        "school_code": "204",
        "school": "",
        "asignaturas": [{
            "name": "COMUNICACIÓN Y MEDIOS SOCIOCULTURALES : ENSEÑANZA Y APRENDIZAJE",
            "code": "510000"
        }, {
            "name": "DIDÁCTICA",
            "code": "510001"
        }, {
            "name": "EVOLUCIÓN HISTÓRICA Y SISTEMAS CONTEMPORÁNEOS DE EDUCACIÓN INFANTIL",
            "code": "510002"
        }, {
            "name": "FILOSOFÍA, ÉTICA Y EDUCACIÓN MORAL",
            "code": "510003"
        }, {
            "name": "PSICOLOGÍA DEL DESARROLLO",
            "code": "510004"
        }, {
            "name": "DIAGNÓSTICO PEDAGÓGICO Y TÉCNICAS DE OBSERVACIÓN EN EL AULA DE EDUCACIÓN INFANTIL",
            "code": "510005"
        }, {
            "name": "ORGANIZACIÓN DE LAS INSTITUCIONES EDUCATIVAS",
            "code": "510006"
        }, {
            "name": "ORIENTACIÓN E INTERVENCIÓN TUTORIAL",
            "code": "510007"
        }, {
            "name": "PSICOLOGÍA DE LA EDUCACIÓN",
            "code": "510008"
        }, {
            "name": "SOCIOLOGÍA DE LA EDUCACIÓN",
            "code": "510009"
        }, {
            "name": "FUNDAMENTOS PSICOLÓGICOS DE ATENCIÓN A LA DIVERSIDAD",
            "code": "510010"
        }, {
            "name": "LENGUA EXTRANJERA PARA EDUCACIÓN INFANTIL",
            "code": "510011"
        }, {
            "name": "PRÁCTICUM I",
            "code": "510012"
        }, {
            "name": "PROMOCIÓN DE LA SALUD Y HÁBITOS SALUDABLES",
            "code": "510013"
        }, {
            "name": "ATENCIÓN TEMPRANA: FUNDAMENTOS Y RECURSOS",
            "code": "510014"
        }, {
            "name": "EL JUEGO MUSICAL: EXPRESIÓN Y PERCEPCIÓN",
            "code": "510015"
        }, {
            "name": "LA INNOVACIÓN EDUCATIVA",
            "code": "510016"
        }, {
            "name": "PROCESOS DE APRENDIZAJE: DESARROLLO DE LAS HABILIDADES COMUNICATIVAS",
            "code": "510017"
        }, {
            "name": "PSICOLOGÍA Y CONTEXTOS EDUCATIVOS",
            "code": "510018"
        }, {
            "name": "ARTES PLÁSTICAS Y VISUALES EN EDUCACIÓN INFANTIL",
            "code": "510019"
        }, {
            "name": "ENSEÑANZA Y APRENDIZAJE DE LAS CIENCIAS DE LA NATURALEZA",
            "code": "510020"
        }, {
            "name": "ENSEÑANZA Y APRENDIZAJE DE LAS CIENCIAS SOCIALES",
            "code": "510021"
        }, {
            "name": "ENSEÑANZA Y APRENDIZAJE DE LAS MATEMÁTICAS",
            "code": "510022"
        }, {
            "name": "PRÁCTICUM II",
            "code": "510023"
        }, {
            "name": "PSICOMOTRICIDAD INFANTIL",
            "code": "510024"
        }, {
            "name": "DIDÁCTICA DE LA LENGUA ESPAÑOLA Y DE LA LITERATURA",
            "code": "510025"
        }, {
            "name": "PROYECTOS PARA LA EXPRESIÓN INTEGRAL EN INFANTIL",
            "code": "510026"
        }, {
            "name": "PRÁCTICUM III",
            "code": "510027"
        }, {
            "name": "TRABAJO FIN DE GRADO",
            "code": "510028"
        }, {
            "name": "TRABAJO FIN DE GRADO",
            "code": "510048"
        }, {
            "name": "DISEÑO E IMPLEMENTACIÓN DE ACTIVIDADES CLIL EN EDUCACIÓN INFANTIL",
            "code": "510045"
        }, {
            "name": "APROXIMACIÓN PRÁCTICA A LAS CULTURAS DE HABLA INGLESA",
            "code": "510044"
        }, {
            "name": "EDUCACIÓN ESTÉTICA: ARTES Y CULTURA VISUAL EN EL ENTORNO INFANTIL",
            "code": "510042"
        }, {
            "name": "ESTRATEGIAS DE INTERVENCIÓN PARA ALUMNOS CON DIFICULTADES SOCIOFAMILIARES Y EMOCIONALES",
            "code": "510047"
        }, {
            "name": "INTERVENCIÓN EDUCATIVA EN DISCAPACIDADES SENSORIALES Y MOTRICES",
            "code": "510046"
        }, {
            "name": "LA MÚSICA COMO HERRAMIENTA TERAPÉUTICA EN LA ETAPA 0-3 Y EDUCACIÓN INFANTIL",
            "code": "510043"
        }, {
            "name": "EL DESARROLLO DE HABILIDADES COMUNICATIVAS PRODUCTIVAS EN LENGUA INGLESA",
            "code": "510031"
        }, {
            "name": "LECTOESCRITURA DE LA LENGUA INGLESA PARA EDUCACIÓN INFANTIL",
            "code": "510032"
        }, {
            "name": "DESARROLLO MUSICAL EN EDUCACIÓN INFANTIL",
            "code": "510030"
        }, {
            "name": "DETECCIÓN E INTERVENCIÓN EDUCATIVA EN DIFICULTADES DE EXPRESIÓN Y COMUNICACIÓN",
            "code": "510034"
        }, {
            "name": "EL MENSAJE CRISTIANO",
            "code": "510036"
        }, {
            "name": "INTERVENCIÓN EDUCATIVA EN DISCAPACIDAD INTELECTUAL, ALTAS CAPACIDADES Y TGD",
            "code": "510033"
        }, {
            "name": "PROCEDIMIENTOS ARTÍSTICOS, CREATIVIDAD Y EXPRESIÓN EN EDUCACIÓN INFANTIL",
            "code": "510029"
        }, {
            "name": "RELIGIÓN, CULTURA Y VALORES",
            "code": "510035"
        }]
    }, {
        "name": "Grado en Educación Primaria",
        "code": "G520",
        "school_code": "204",
        "school": "",
        "asignaturas": [{
            "name": "COMUNICACIÓN Y MEDIOS SOCIOCULTURALES : ENSEÑANZA Y APRENDIZAJE",
            "code": "510000"
        }, {
            "name": "DIDÁCTICA",
            "code": "510001"
        }, {
            "name": "FILOSOFÍA, ÉTICA Y EDUCACIÓN MORAL",
            "code": "510003"
        }, {
            "name": "PROCESOS DE APRENDIZAJE:DESARROLLO DE LAS HABILIDADES COMUNICATIVAS",
            "code": "520000"
        }, {
            "name": "PSICOLOGÍA DEL DESARROLLO",
            "code": "510004"
        }, {
            "name": "GEOGRAFÍA GENERAL",
            "code": "520001"
        }, {
            "name": "LENGUA ESPAÑOLA Y SU DIDÁCTICA",
            "code": "520002"
        }, {
            "name": "ORGANIZACIÓN DE LAS INSTITUCIONES EDUCATIVAS",
            "code": "510006"
        }, {
            "name": "PSICOLOGÍA DE LA EDUCACIÓN",
            "code": "510008"
        }, {
            "name": "SOCIOLOGÍA DE LA EDUCACIÓN",
            "code": "510009"
        }, {
            "name": "FORMACIÓN VOCAL E INSTRUMENTAL: RECURSOS DIDÁCTICOS",
            "code": "520003"
        }, {
            "name": "FUNDAMENTOS PSICOLÓGICOS DE ATENCIÓN A LA DIVERSIDAD",
            "code": "510010"
        }, {
            "name": "LENGUA EXTRANJERA I",
            "code": "520004"
        }, {
            "name": "MATEMÁTICAS I",
            "code": "520005"
        }, {
            "name": "PRÁCTICUM I",
            "code": "520006"
        }, {
            "name": "CIENCIAS DE LA MATERIA Y DE LA ENERGÍA",
            "code": "520008"
        }, {
            "name": "CIENCIAS DE LA TIERRA Y DE LA VIDA",
            "code": "520009"
        }, {
            "name": "LA INNOVACIÓN EDUCATIVA: PERSPECTIVAS CONTEMPORÁNEAS",
            "code": "520007"
        }, {
            "name": "LENGUA EXTRANJERA II",
            "code": "520010"
        }, {
            "name": "DIDÁCTICA DE LAS CIENCIAS DE LA NATURALEZA",
            "code": "520011"
        }, {
            "name": "DIDÁCTICA DE LAS CIENCIAS SOCIALES",
            "code": "520012"
        }, {
            "name": "EL LENGUAJE PLÁSTICO Y VISUAL:RECURSOS Y APLICACIONES",
            "code": "520013"
        }, {
            "name": "LITERATURA ESPAÑOLA Y SU DIDÁCTICA",
            "code": "520014"
        }, {
            "name": "MATEMÁTICAS II",
            "code": "520015"
        }, {
            "name": "DIDÁCTICA DE LAS MATEMÁTICAS",
            "code": "520016"
        }, {
            "name": "HISTORIA DE ESPAÑA",
            "code": "520017"
        }, {
            "name": "PRÁCTICUM II",
            "code": "520018"
        }, {
            "name": "EDUCACIÓN FÍSICA Y SU DIDÁCTICA",
            "code": "520019"
        }, {
            "name": "PRÁCTICUM III",
            "code": "520020"
        }, {
            "name": "PRACTICUM III (LENGUA EXTRANJERA PARA EDUCACIÓN PRIMARIA",
            "code": "520023"
        }, {
            "name": "TRABAJO FIN DE GRADO",
            "code": "520021"
        }, {
            "name": "TRABAJO FIN DE GRADO",
            "code": "520027"
        }, {
            "name": "APROXIMACIÓN PRÁCTICA A LAS CULTURAS DE HABLA INGLESA",
            "code": "510044"
        }, {
            "name": "DIFICULTADES DE APRENDIZAJE",
            "code": "520024"
        }, {
            "name": "DISEÑO E IMPLEMENTACIÓN DE ACTIVIDADES CLIC EN EDUCACIÓN PRIMARIA",
            "code": "520026"
        }, {
            "name": "EL MENSAJE CRISTIANO",
            "code": "510036"
        }, {
            "name": "ESTRATEGIAS DE INTERVENCIÓN PARA ALUMNOS CON DIFICULTADES SOCIOFAMILIARES Y EMOCIONALES",
            "code": "510047"
        }, {
            "name": "INTERVENCIÓN EDUCATIVA EN DISCAPACIDADES SENSORIALES Y MOTRICES",
            "code": "510046"
        }, {
            "name": "INTRODUCCIÓN A LA LITERATURA INFANTIL EN LENGUA INGLESA",
            "code": "520025"
        }, {
            "name": "EL DESARROLLO DE HABILIDADES COMUNICATIVAS PRODUCTIVAS EN LENGUA INGLESA",
            "code": "510031"
        }, {
            "name": "EL MENSAJE CRISTIANO",
            "code": "510036"
        }, {
            "name": "IMAGEN, PERCEPCIÓN, EXPRESIÓN Y COMUNICACIÓN CORPORAL",
            "code": "520038"
        }, {
            "name": "INTERVENCIÓN EDUCATIVA EN DISCAPACIDAD INTELECTUAL, ALTAS CAPACIDADES Y TGD",
            "code": "510033"
        }, {
            "name": "RELIGIÓN, CULTURA Y VALORES",
            "code": "510035"
        }]
    }, {
        "name": "Grado en Educación Social",
        "code": "G560",
        "school_code": "204",
        "school": "",
        "asignaturas": [{
            "name": "DIDÁCTICA GENERAL",
            "code": "560000"
        }, {
            "name": "EVOLUCIÓN Y PERSPECTIVAS DE LA EDUCACIÓN SOCIAL",
            "code": "560001"
        }, {
            "name": "PEDAGOGÍA SOCIAL",
            "code": "560002"
        }, {
            "name": "PSICOLOGÍA DEL DESARROLLO",
            "code": "510004"
        }, {
            "name": "TECNOLOGÍAS DE LA INFORMACIÓN Y LA COMUNICACIÓN EN CONTEXTOS EDUCATIVOS",
            "code": "560003"
        }, {
            "name": "ANIMACIÓN SOCIOCULTURAL",
            "code": "560006"
        }, {
            "name": "ANTROPOLOGÍA SOCIAL Y CULTURAL",
            "code": "560005"
        }, {
            "name": "HABILIDADES SOCIALES",
            "code": "560004"
        }, {
            "name": "PSICOLOGÍA DE LA EDUCACIÓN",
            "code": "510008"
        }, {
            "name": "SOCIOLOGÍA DE LA EDUCACIÓN",
            "code": "510009"
        }, {
            "name": "DINÁMICA DE GRUPOS",
            "code": "560009"
        }, {
            "name": "MÉTODOS Y TÉCNICAS DE INVESTIGACIÓN EN CIENCAS SOCIALES",
            "code": "560011"
        }, {
            "name": "PLANIFICACIÓN Y GESTIÓN DE PROGRAMAS,CENTROS Y RECURSOS SOCIALES",
            "code": "560010"
        }, {
            "name": "POLÍTICA Y LEGISLACIÓN SOCIAL",
            "code": "560007"
        }, {
            "name": "PROCESOS DE DESADAPTACIÓN SOCIAL",
            "code": "560008"
        }, {
            "name": "ACOMPAÑAMIENTO Y MEDIACIÓN",
            "code": "560013"
        }, {
            "name": "ATENCIÓN SOCIOEDUCATIVA EN EL ESTADO DEL BIENESTAR",
            "code": "560012"
        }, {
            "name": "INMIGRACIÓN Y DIVERSIDAD CULTURAL",
            "code": "560016"
        }, {
            "name": "PSICOLOGÍA SOCIAL",
            "code": "560015"
        }, {
            "name": "TÉCNICAS DE MODIFICACIÓN DE CONDUCTA",
            "code": "560014"
        }, {
            "name": "EDUCACIÓN DE PERSONAS ADULTAS",
            "code": "560021"
        }, {
            "name": "EDUCACIÓN EN EL TIEMPO LIBRE",
            "code": "560019"
        }, {
            "name": "MEDIO ESCOLAR",
            "code": "560020"
        }, {
            "name": "MENORES EN SITUACIÓN DE RIESGO SOCIAL",
            "code": "560018"
        }, {
            "name": "PERSONAS MAYORES",
            "code": "560017"
        }, {
            "name": "FAMILIA",
            "code": "560024"
        }, {
            "name": "INCLUSIÓN SOCIAL",
            "code": "560023"
        }, {
            "name": "INSTITUCIONES CERRADAS",
            "code": "560022"
        }, {
            "name": "PRÁCTICUM I",
            "code": "560025"
        }, {
            "name": "PRÁCTICUM II",
            "code": "560026"
        }, {
            "name": "TRABAJO FIN DE GRADO",
            "code": "560032"
        }, {
            "name": "TRABAJO FIN DE GRADO",
            "code": "560027"
        }, {
            "name": "ARTE E INCLUSIÓN SOCIAL",
            "code": "560031"
        }, {
            "name": "EDUCACIÓN PARA EL DESARROLLO SOSTENIBLE",
            "code": "560028"
        }, {
            "name": "PREVENCIÓN EN DROGODEPENDENCIA",
            "code": "560030"
        }, {
            "name": "TRASTORNOS DE CONDUCTA Y PERSONALIDAD",
            "code": "560029"
        }]
    }, {
        "name": "Grado en Educación Infantil (bilingüe-Inglés)",
        "code": "G530",
        "school_code": "204",
        "school": "",
        "asignaturas": [{
            "name": "COMUNICACIÓN Y MEDIOS SOCIOCULTURALES : ENSEÑANZA Y APRENDIZAJE",
            "code": "510000"
        }, {
            "name": "DIDÁCTICA",
            "code": "510001"
        }, {
            "name": "EVOLUCIÓN HISTÓRICA Y SISTEMAS CONTEMPORÁNEOS DE EDUCACIÓN INFANTIL",
            "code": "510002"
        }, {
            "name": "FILOSOFÍA, ÉTICA Y EDUCACIÓN MORAL",
            "code": "510003"
        }, {
            "name": "PSICOLOGÍA DEL DESARROLLO",
            "code": "510004"
        }, {
            "name": "DIAGNÓSTICO PEDAGÓGICO Y TÉCNICAS DE OBSERVACIÓN EN EL AULA DE EDUCACIÓN INFANTIL",
            "code": "510005"
        }, {
            "name": "ORGANIZACIÓN DE LAS INSTITUCIONES EDUCATIVAS",
            "code": "510006"
        }, {
            "name": "ORIENTACIÓN E INTERVENCIÓN TUTORIAL",
            "code": "510007"
        }, {
            "name": "PSICOLOGÍA DE LA EDUCACIÓN",
            "code": "510008"
        }, {
            "name": "SOCIOLOGÍA DE LA EDUCACIÓN",
            "code": "510009"
        }, {
            "name": "FUNDAMENTOS PSICOLÓGICOS DE ATENCIÓN A LA DIVERSIDAD",
            "code": "510010"
        }, {
            "name": "LENGUA EXTRANJERA PARA EDUCACIÓN INFANTIL",
            "code": "510011"
        }, {
            "name": "PRÁCTICUM I",
            "code": "510012"
        }, {
            "name": "PROMOCIÓN DE LA SALUD Y HÁBITOS SALUDABLES",
            "code": "510013"
        }, {
            "name": "ATENCIÓN TEMPRANA: FUNDAMENTOS Y RECURSOS",
            "code": "510014"
        }, {
            "name": "EL JUEGO MUSICAL: EXPRESIÓN Y PERCEPCIÓN",
            "code": "510015"
        }, {
            "name": "LA INNOVACIÓN EDUCATIVA",
            "code": "510016"
        }, {
            "name": "PROCESOS DE APRENDIZAJE: DESARROLLO DE LAS HABILIDADES COMUNICATIVAS",
            "code": "510017"
        }, {
            "name": "PSICOLOGÍA Y CONTEXTOS EDUCATIVOS",
            "code": "510018"
        }, {
            "name": "ARTES PLÁSTICAS Y VISUALES EN EDUCACIÓN INFANTIL",
            "code": "510019"
        }, {
            "name": "ENSEÑANZA Y APRENDIZAJE DE LAS CIENCIAS DE LA NATURALEZA",
            "code": "510020"
        }, {
            "name": "ENSEÑANZA Y APRENDIZAJE DE LAS CIENCIAS SOCIALES",
            "code": "510021"
        }, {
            "name": "ENSEÑANZA Y APRENDIZAJE DE LAS MATEMÁTICAS",
            "code": "510022"
        }, {
            "name": "PRÁCTICUM II",
            "code": "510023"
        }, {
            "name": "PSICOMOTRICIDAD INFANTIL",
            "code": "510024"
        }, {
            "name": "DIDÁCTICA DE LA LENGUA ESPAÑOLA Y DE LA LITERATURA",
            "code": "510025"
        }, {
            "name": "PROYECTOS PARA LA EXPRESIÓN INTEGRAL EN INFANTIL",
            "code": "510026"
        }, {
            "name": "PRÁCTICUM III",
            "code": "510027"
        }, {
            "name": "TRABAJO FIN DE GRADO",
            "code": "510028"
        }, {
            "name": "TRABAJO FIN DE GRADO",
            "code": "510048"
        }, {
            "name": "DISEÑO E IMPLEMENTACIÓN DE ACTIVIDADES CLIL EN EDUCACIÓN INFANTIL",
            "code": "510045"
        }, {
            "name": "APROXIMACIÓN PRÁCTICA A LAS CULTURAS DE HABLA INGLESA",
            "code": "510044"
        }, {
            "name": "EDUCACIÓN ESTÉTICA: ARTES Y CULTURA VISUAL EN EL ENTORNO INFANTIL",
            "code": "510042"
        }, {
            "name": "ESTRATEGIAS DE INTERVENCIÓN PARA ALUMNOS CON DIFICULTADES SOCIOFAMILIARES Y EMOCIONALES",
            "code": "510047"
        }, {
            "name": "INTERVENCIÓN EDUCATIVA EN DISCAPACIDADES SENSORIALES Y MOTRICES",
            "code": "510046"
        }, {
            "name": "LA MÚSICA COMO HERRAMIENTA TERAPÉUTICA EN LA ETAPA 0-3 Y EDUCACIÓN INFANTIL",
            "code": "510043"
        }, {
            "name": "EL DESARROLLO DE HABILIDADES COMUNICATIVAS PRODUCTIVAS EN LENGUA INGLESA",
            "code": "510031"
        }, {
            "name": "LECTOESCRITURA DE LA LENGUA INGLESA PARA EDUCACIÓN INFANTIL",
            "code": "510032"
        }, {
            "name": "DESARROLLO MUSICAL EN EDUCACIÓN INFANTIL",
            "code": "510030"
        }, {
            "name": "DETECCIÓN E INTERVENCIÓN EDUCATIVA EN DIFICULTADES DE EXPRESIÓN Y COMUNICACIÓN",
            "code": "510034"
        }, {
            "name": "EL MENSAJE CRISTIANO",
            "code": "510036"
        }, {
            "name": "INTERVENCIÓN EDUCATIVA EN DISCAPACIDAD INTELECTUAL, ALTAS CAPACIDADES Y TGD",
            "code": "510033"
        }, {
            "name": "PROCEDIMIENTOS ARTÍSTICOS, CREATIVIDAD Y EXPRESIÓN EN EDUCACIÓN INFANTIL",
            "code": "510029"
        }, {
            "name": "RELIGIÓN, CULTURA Y VALORES",
            "code": "510035"
        }]
    }, {
        "name": "Grado en Educación Primaria (bilingüe-Inglés)",
        "code": "G540",
        "school_code": "204",
        "school": "",
        "asignaturas": [{
            "name": "COMUNICACIÓN Y MEDIOS SOCIOCULTURALES : ENSEÑANZA Y APRENDIZAJE",
            "code": "510000"
        }, {
            "name": "DIDÁCTICA",
            "code": "510001"
        }, {
            "name": "FILOSOFÍA, ÉTICA Y EDUCACIÓN MORAL",
            "code": "510003"
        }, {
            "name": "PROCESOS DE APRENDIZAJE:DESARROLLO DE LAS HABILIDADES COMUNICATIVAS",
            "code": "520000"
        }, {
            "name": "PSICOLOGÍA DEL DESARROLLO",
            "code": "510004"
        }, {
            "name": "GEOGRAFÍA GENERAL",
            "code": "520001"
        }, {
            "name": "LENGUA ESPAÑOLA Y SU DIDÁCTICA",
            "code": "520002"
        }, {
            "name": "ORGANIZACIÓN DE LAS INSTITUCIONES EDUCATIVAS",
            "code": "510006"
        }, {
            "name": "PSICOLOGÍA DE LA EDUCACIÓN",
            "code": "510008"
        }, {
            "name": "SOCIOLOGÍA DE LA EDUCACIÓN",
            "code": "510009"
        }, {
            "name": "FORMACIÓN VOCAL E INSTRUMENTAL: RECURSOS DIDÁCTICOS",
            "code": "520003"
        }, {
            "name": "FUNDAMENTOS PSICOLÓGICOS DE ATENCIÓN A LA DIVERSIDAD",
            "code": "510010"
        }, {
            "name": "LENGUA EXTRANJERA I",
            "code": "520004"
        }, {
            "name": "MATEMÁTICAS I",
            "code": "520005"
        }, {
            "name": "PRÁCTICUM I",
            "code": "520006"
        }, {
            "name": "CIENCIAS DE LA MATERIA Y DE LA ENERGÍA",
            "code": "520008"
        }, {
            "name": "CIENCIAS DE LA TIERRA Y DE LA VIDA",
            "code": "520009"
        }, {
            "name": "LA INNOVACIÓN EDUCATIVA: PERSPECTIVAS CONTEMPORÁNEAS",
            "code": "520007"
        }, {
            "name": "LENGUA EXTRANJERA II",
            "code": "520010"
        }, {
            "name": "DIDÁCTICA DE LAS CIENCIAS DE LA NATURALEZA",
            "code": "520011"
        }, {
            "name": "DIDÁCTICA DE LAS CIENCIAS SOCIALES",
            "code": "520012"
        }, {
            "name": "EL LENGUAJE PLÁSTICO Y VISUAL:RECURSOS Y APLICACIONES",
            "code": "520013"
        }, {
            "name": "LITERATURA ESPAÑOLA Y SU DIDÁCTICA",
            "code": "520014"
        }, {
            "name": "MATEMÁTICAS II",
            "code": "520015"
        }, {
            "name": "DIDÁCTICA DE LAS MATEMÁTICAS",
            "code": "520016"
        }, {
            "name": "HISTORIA DE ESPAÑA",
            "code": "520017"
        }, {
            "name": "PRÁCTICUM II",
            "code": "520018"
        }, {
            "name": "EDUCACIÓN FÍSICA Y SU DIDÁCTICA",
            "code": "520019"
        }, {
            "name": "PRÁCTICUM III",
            "code": "520020"
        }, {
            "name": "PRACTICUM III (LENGUA EXTRANJERA PARA EDUCACIÓN PRIMARIA",
            "code": "520023"
        }, {
            "name": "TRABAJO FIN DE GRADO",
            "code": "520021"
        }, {
            "name": "TRABAJO FIN DE GRADO",
            "code": "520027"
        }, {
            "name": "DISEÑO E IMPLEMENTACIÓN DE ACTIVIDADES CLIC EN EDUCACIÓN PRIMARIA",
            "code": "520026"
        }, {
            "name": "INTRODUCCIÓN A LA LITERATURA INFANTIL EN LENGUA INGLESA",
            "code": "520025"
        }, {
            "name": "APROXIMACIÓN PRÁCTICA A LAS CULTURAS DE HABLA INGLESA",
            "code": "510044"
        }, {
            "name": "DIFICULTADES DE APRENDIZAJE",
            "code": "520024"
        }, {
            "name": "EL MENSAJE CRISTIANO",
            "code": "510036"
        }, {
            "name": "ESTRATEGIAS DE INTERVENCIÓN PARA ALUMNOS CON DIFICULTADES SOCIOFAMILIARES Y EMOCIONALES",
            "code": "510047"
        }, {
            "name": "INTERVENCIÓN EDUCATIVA EN DISCAPACIDADES SENSORIALES Y MOTRICES",
            "code": "510046"
        }, {
            "name": "EL DESARROLLO DE HABILIDADES COMUNICATIVAS PRODUCTIVAS EN LENGUA INGLESA",
            "code": "510031"
        }, {
            "name": "EL MENSAJE CRISTIANO",
            "code": "510036"
        }, {
            "name": "IMAGEN, PERCEPCIÓN, EXPRESIÓN Y COMUNICACIÓN CORPORAL",
            "code": "520038"
        }, {
            "name": "INTERVENCIÓN EDUCATIVA EN DISCAPACIDAD INTELECTUAL, ALTAS CAPACIDADES Y TGD",
            "code": "510033"
        }, {
            "name": "RELIGIÓN, CULTURA Y VALORES",
            "code": "510035"
        }]
    }]
};