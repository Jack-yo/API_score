const http=require('http');

const urlLib=require('url');

const mysql  = require('mysql');  
 
var connection = mysql.createConnection({     
  host     : 'localhost',       
  user     : 'root',              
  password : 'password',       
  port: '3306',                   
  database: 'demo' 
}); 


connection.connect();

var server=http.createServer(function(req,res){

     
	 
	 var obj=urlLib.parse(req.url,true);
	 
	 var url=obj.pathname;
	 
	 var GET = obj.query;
	 
	
	
	
	if(url=="/demo"){
	
	   
	   
	   
	   if(GET.student_id&&GET.course_id){
	   
	   var query1='SELECT * FROM lesson_mark WHERE id_student='+GET.student_id/*+' AND '+'id_lesson='!+GET.course_id*/;
	   
	     connection.query(query1,function (err, result_student) {
        
		if(err){
          console.log('[SELECT ERROR] - ',err.message);
          return;
        }
		           
	if(result_student){	
	
	
	   for(var i=0;i<result_student.length;i++){
      	 


if(result_student[i].id_lesson==GET.course_id){
 	
    


		
       res.write('成绩为:'+result_student[i].mark/*GET.student_id+','+GET.course_id*/);
	   
	   
	   break;

      
	   
     	   
	   }


          res.write('该人无该课程成绩');}
		   
		   
	
}	   
	
	else{
		
		
		res.write('该人信息不存在');
		
		
	}
	


res.end();

});
		  

      	
		

	  }}//connection.end();

   });


server.listen(3000);


