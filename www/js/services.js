angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Jessica Ledezma',
    lastText: 'wait a moment',
    face: 'http://static.ellahoy.es/ellahoy/fotogallery/625X0/147629/vestido-pin-up-negro-vuelo-y-guantes.jpg'
  }, {
    id: 1,
    name: 'Caren Ledezma',
    lastText: 'Im here',
    face: 'http://img.webdelamoda.com.s3.amazonaws.com/wp-content/uploads/2012/01/modahipster10.jpg'
  }, {
    id: 2,
    name: 'Tania Rodriguez',
    lastText: 'Hey,call me please',
    face: 'https://modaddictiondotnet.files.wordpress.com/2012/09/mejor-vestidos-europa-best-clothing-europe-skyscranners-modaddiction-fashion-moda-chic-glamour-hipster-italia-francia-espana-inglaterra-dinamarca-paris-mujer-woman.jpg'
  }, {
    id: 3,
    name: 'Arlene Mota',
    lastText: 'Yes, this is the classroom',
    face: 'http://i2.esmas.com/galerias/fotos/2012/8/_d-a2354200-36d4-1030-91f2-0019b9d5c8df.jpg'
  }, {
    id: 4,
    name: 'Adriana Alvarez',
    lastText: 'See you later!',
    face: 'http://24.media.tumblr.com/tumblr_me3vejMVkm1rruy10o1_400.jpg'
  }];

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