var express = require('express');

var router = express.Router();



/* GET home page. */

router.get('/', function(req, res, next) {

    var c1=(Math.random())

    var c2=(Math.random())

    var c3=(Math.random())

    var c4=(Math.random())



    var powFunction=Math.pow(c1)

    var signFunction=Math.sign(c2)

    var tanhFunction=Math.tanh(c3)

    var truncFunction=Math.trunc(c4)



    

    res.render('computation',

    {

        title:'Manuja Computes Functions',

        c1:c1,

        c2:c2,

        c3:c3,

        c4:c4,

        m:powFunction,
        
        a:signFunction,

        n:tanhFunction,

        u:truncFunction



    });

     

});

module.exports=router;