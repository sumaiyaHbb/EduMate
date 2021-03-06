var express = require('express');
var router = express.Router();

Class = require('../models/class');
Student = require('../models/student');
User = require('../models/user');

router.get('/classes', function(req,res,next){
    Student.getStudentByUsername(req.user.username, function(err, student){

        if(err) throw err;
        res.render('students/classes', {student: student});
    });
});

router.get('/classes/grades', function(req,res,next)
{
  Student.getStudentByUsername(req.user.username, function(err, student){

    if(err) throw err;
    res.render('students/grades', {student: student});
});

});

router.get('/classes/quiz', function(req,res,next)
{
  Student.getStudentByUsername(req.user.username, function(err, student){

    if(err) throw err;
    res.render('students/quiz', {student: student});
});

});

router.get('/classes/mid', function(req,res,next)
{
  Student.getStudentByUsername(req.user.username, function(err, student){

    if(err) throw err;
    res.render('students/mid', {student: student});
});

});
router.get('/classes/final', function(req,res,next)
{
  Student.getStudentByUsername(req.user.username, function(err, student){

    if(err) throw err;
    res.render('students/final', {student: student});
});

});
router.get('/classes/assignment', function(req,res,next)
{
  Student.getStudentByUsername(req.user.username, function(err, student){

    if(err) throw err;
    res.render('students/assignment', {student: student});
});

});

router.post('/classes/quiz', function(req,res,next)
{
  class_id = req.body.class_id;
  
  Class.getclassById(class_id, function(err, classname)
    {
        var Highestmarks = 0 ;
        if(err) throw err;
        for(i=0; i<classname.quiz.length;i++)
        {
            if(Highestmarks < classname.quiz[i].obtained_marks ){
                Highestmarks = classname.quiz[i].obtained_marks;
            }
        }
        res.render('students/quizProg', { Highestmarks: Highestmarks});
    });
});

router.post('/classes/mid', function(req,res,next)
{
  class_id = req.body.class_id;
  
  Class.getclassById(class_id, function(err, classname)
    {
        var Highestmarks = 0 ;
        if(err) throw err;
        for(i=0; i<classname.mid.length;i++)
        {
            if(Highestmarks < classname.mid[i].obtained_marks ){
                Highestmarks = classname.mid[i].obtained_marks;
            }
        }
        res.render('students/midProg', { Highestmarks: Highestmarks});
    });
});

router.post('/classes/final', function(req,res,next)
{
  class_id = req.body.class_id;
  
  Class.getclassById(class_id, function(err, classname)
    {
        var Highestmarks = 0 ;
        if(err) throw err;
        for(i=0; i<classname.final.length;i++)
        {
            if(Highestmarks < classname.final[i].obtained_marks ){
                Highestmarks = classname.final[i].obtained_marks;
            }
        }
        res.render('students/finalProg', { Highestmarks: Highestmarks});
    });
});

router.post('/classes/assignment', function(req,res,next)
{
  class_id = req.body.class_id;
  
  Class.getclassById(class_id, function(err, classname)
    {
        var Highestmarks = 0 ;
        if(err) throw err;
        for(i=0; i<classname.assignment.length;i++)
        {
            if(Highestmarks < classname.assignment[i].obtained_marks ){
                Highestmarks = classname.assignment[i].obtained_marks;
            }
        }
        res.render('students/midProg', { Highestmarks: Highestmarks});
    });
});
router.post('/classes/:id/register',function(req,res)
{   

        info_student = [];
        info_student['class_id'] = req.body.class_id;
        
        info_student['student_username']= req.user.username;
    
  
      
          info = [];
          info['student_username'] = req.user.username;
          info['class_id'] = req.body.class_id;
          info['class_title'] = req.body.class_title;
      
          Student.register(info, function(err, student)
          {
              if(err) throw err;
              console.log(student);
          });
          
        Class.register(info_student, function(err, student)
        {
                console.log(student);
        });
        req.flash('success_msg', 'You are now registered to teach this class');
          res.redirect('/students/classes');

      
      
    

});


module.exports = router;