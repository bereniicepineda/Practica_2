angular.module('starter.services', [])

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },



    get: function(chatId) {

        chats=[];
    $cordovaSQLite.execute(db, 'SELECT * FROM agenda where id= ?' , [chatId])
            .then(function(result){

            if(result.rows.lenght >0){


                chats.push({"id":result.rows.item(0).id,
                        "nombre":result.rows.item(0).nombre,
                        "apellido":result.rows.item(0).apellido,
                        "telefono":result.rows.item(0).telefono,
                        "email":result.rows.item(0).emai});
            }
    },
    function(error){
        statusMessage = "Error" + error.message;
    });

return chats;

    }


  }