const express = require("express");


const bodyParser = require("body-parser");
const { MongoClient, ObjectID } = require("mongodb");
const assert = require("assert");

const app = express();
app.use(bodyParser.json());

const mongoUrl = "mongodb://localhost:27017";
const dataBase = "tunisiainfo";

MongoClient.connect(
  mongoUrl,
  { useNewUrlParser: true },
  (err, client) => {
    assert.equal(err, null, "data base erreur");
    const db = client.db(dataBase);
// VerifData Add Par Admin 
     app.post("/Add-Article",(req, res) =>{
      let newProduct = req.body;
      db.collection("admin_article").insertOne(newProduct, (err, data) => {
        if (err) res.send("cant add Articles");
        else res.send(data);
      });
    });    
      app.get('/EspaceAdmin',(req, res) => {
      db.collection("admin_article")
        .find()
        .toArray((err, data) => {
          if (err) res.send("cant fecth Articles");
          else res.send(data);
        });
    });
    app.get('/ArticlesList',(req, res) => {
      db.collection("articles")
      // .aggregate({$group: {_id: {$substr: ['$title', 0, 1],title:'$title'}}})
      .find() 
      // .sort( { title: 1 } )
      .toArray((err, data) => {
          if (err) res.send("cant fecth Articles");
          else res.send(data);
        });
    });
    app.get('/ArticlesList/:id',(req, res) => {
      let id = ObjectID(req.params.id);
      db.collection("articles")
      .find({"_id": id})
      .toArray((err, data) => {
          if (err) res.send("cant fecth Articles");
          else res.send(data);
        });
    });
    app.get('/EditArticleUserAConfirm/:variable',(req, res) => {
      let j = req.params.variable;
      db.collection("articles")
      .find({"introduction": j})
      .toArray((err, data) => {
          if (err) res.send("cant fecth Articles");
          else res.send(data);
        });
    });
    app.post("/ValidateArticle", (req, res) => {
      let newProduct = req.body;
      db.collection("articles").insertOne(newProduct, (err, data) => {
        if (err) res.send("cant add Articles");
        else res.send(data);
      });
    });
    // Validate Edit
    app.post("/SendEditArticle", (req, res) => {
      let newProduct = req.body;
      db.collection("admin_update_article").insertOne(newProduct, (err, data) => {
        if (err) res.send("cant Update Articles");
        else res.send(data);
      });
    });
    app.delete("/ValidateArticle/:id", (req, res) => {
      let id = ObjectID(req.params.id);
      db.collection("admin_article").findOneAndDelete({ _id: id }, (err, data) => {
        if (err) res.send("cant delete Articles");
        else res.send(data);
      });
    });
    app.post("/EditArticleUser", (req, res) => {
      let newProduct = req.body;
      db.collection("admin_update_article").insertOne(newProduct, (err, data) => {
        if (err) res.send("cant add Articles");
        else res.send(data);
      });

    });


    // Tourismm CRUD

 
  /**
   * The add part
   */
  /*app.get("/admin/tourism/",(req,res)=>{
    db.collection('tourism').find().toArray((err,data)=>{
      if(err) res.send("cant get failed"); else res.send(data)
    })
  })*/
  app.post("/admin/tourism/add",(req,res)=>{
    let newart=req.body;
    db.collection('tourism').insertOne(newart,(err,data)=>{
      if(err) res.send("Add failed"); else res.send("Add success")
    }) 
  });// works
  /**
   * Governorate read part
   *  
   * Read all articles
   */
  app.get("/tourismg/:gov", (req,res)=>{
    let attgov=req
    .params.gov;
    db.collection('tourism').find({ gov:attgov }).toArray((err, data)=>{
      if (err) res.send("Can't get list");
      else res.send(data);
    })
  }); // no work
  /**
   * Category read part 
   * 
   * Read specific article
  */
  app.get("/tourismc/:category", (req,res)=>{
    let cat=req.params.category;
    db.collection('tourism').find({ category: cat }).toArray( (err, data)=>{
      if (err) res.send("Can't get list");
      else res.send(data);
    })
  }); // works
  
  /**
   * Category read part
   *  
   * Read specific article
   */
  app.get("/tourism/category/:id",(req,res)=>{
    let attid=ObjectID(req.params.id);
    db.collection('tourism').findOne({_id:attid}, (err,data)=>{
      if(err) res.send("can't get data");
      else res.send(data);
    })
  }); 
  
  /**
   * Governorate read part
   *  
   * Read specific article
   */
  app.get("/tourism/gov/:id",(req,res)=>{
    let attid=ObjectID(req.params.id);
    let cat=req.params.category;
    db.collection('tourism').findOne({_id:attid}, (err,data)=>{
      if(err) res.send("can't get data");
      else res.send(data);
    })
  });

  /** 
   * Admin part:
   * This part includes add and modify
   * of articles by the app's admin 
   */ 
  /**
   * The modify part
   */
  app.put("/admin/tourism/mod/:id",(req,res)=>{
    let artid=ObjectID(req.params.id);
    let updatedArt=req.body;
    db.collection('tourism').findOneAndUpdate(
      {_id:artid},{$set:{...updatedArt}},(err,data)=>{
        if(err) res.send('Modify failed'); 
        else res.send(data)//else res.send("Modify success");//else res.send(data)
      }
    )
  })

  /** 
   * The delete part 
   */
  app.delete("/admin/tourism/rem/:id",(req,res)=>{
    let artid=ObjectID(req.params.id);
    db.collection('tourism').findOneAndDelete(
      {_id:artid},(err,data)=>{
        if(err) res.send('Delete failed'); 
        else res.send(data)//else res.send("Delete success");//else res.send(data)
      }
    )
  })
  app.post("/user/contact", (req, res) => {
    let message = req.body;
    db.collection("adminMails").insertOne(message, (err, data) => {
      if (err) res.send("Message not sent");
      else res.send(data);
    });
  });
  app.delete("/admin/deleteMessages/:id", (req, res) => {
    let id = ObjectID(req.params.id);
    db.collection("adminMails").findOneAndDelete({ _id: id }, (err, data) => {
      if (err) res.send("cant delete Articles");
      else res.send(data);
    });
  });
  app.get("/admin/messages", (req, res) => {
    db.collection("adminMails").find().toArray((err, data) => {
      if (err) res.send("cant edit Articles");
      else res.send(data)})
      
      }
    );
  
    app.get("/adminsLogin",(req,res)=>{
      db.collection("admins").find().toArray((err, data) => {
        if (err) res.send("Can't get Admins");
        else res.send(data)})
        
        })
  

 });
   
app.listen(3007, err => {
  if (err) console.log("server erreur");
  else console.log("server is running on port 3007");
});
