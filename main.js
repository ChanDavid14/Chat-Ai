function chatBot() {
    
    this.input;
    
    this.respondTo = function (input)
    {
  
      this.input = input.toLowerCase();
  
      if (this.match('(hii|hello)'))
      return "Hi Bruhh...!!";
  
      if (this.match('(how are you)'))
         return "Okay, how are you?";
  
      if (this.match('(how old are you)'))
         return "Infinity";

      if (this.match('(can i ask you some question)'))
         return "Yes,Plases !!";
  
      if (this.match('(what is your name)'))
         return "I'm Robot Making by DAVID..";

      if (this.match('(what is datatype|តើdatatypeជាអ្វី)'))
         return "DataType គឺជាប្រភេទ Data ប្រើសម្រាប់ដាក់លក្ខណៈ​។";

      if (this.match('(what is loop statement|ចូរអោយនិយមន័យ loop statement ?)'))
         return "Loop statement: ប្រើសម្រាប់​ execute statment មួយឬច្រើនសាររហូតវាជួបលក្ខណៈពិត ។";
      
      if (this.match('(what is for loop|ចូរអោយនិយមន័យ for loop  ?)'))
         return "For loop ជា loop ដែលមានលក្ខណៈពិសេសជាង Loop ដទៃព្រោះនៅក្នង Statement របស់វាគឺ Initialization,Condition,Step  ។";
    
      if (this.match('(what is initiazliation|តើ initialization ជាអ្វី)'))
         return "Initialization គឺជា Statement មួយប្រើសម្រាប់កំណត់តម្លៃចាប់ផ្តើមពី Loop ហើយ Statmente នេះ​ execute តែម្តងគត់ ។";

      if (this.match('(what is step|តើ step ជាអ្វី)'))
         return "Step គឺជា Statement ប្រើសម្រាប់កំណត់ជំហាន់របស់ Loop ។";

      if (this.match('(what is condition|ចូរអោយនិយមន័យ condition)'))
         return "Condition គឺ Statment មួយប្រើសម្រាប់ដាក់លក្ខណៈអោយ Loop ។";
      
      if (this.match('(តើលក្ខខណ្ឌក្នុងការបញ្ជា Loop កើតមានប៉ុន្នានលក្ខខណ្ឌុះ|how many loop up can control)'))
         return "កើត​មាន 3 លក្ខខណ្ឌ៖ 1/តម្លៃចាប់ផ្តើមតិចជាងគេ... 2/លក្ខខណ្ឌត្រូវប្រើសញ្ញា <,<=...3/ជំហ៊ានកើតត្រូវកើនទៀង ++ ។";
      
      if (this.match('(តើលក្ខខណ្ឌក្នុងការបញ្ជា Loop ថយមានប៉ុន្នានលក្ខខណ្ឌុះ|how many loop down can control)'))
         return "កើតមាន ៣ លក្ខខណ្ឌ ៖ 1/តម្លែចាប់ផ្តើមធំជាងគេ...2/លក្ខខណ្ឌត្រូវប្រើសញ្ញា >,>=...3/ជំហានត្រូវថយចុះ -- ។";

      if (this.match('(what is while loop|ចូរអោយនិយមន័យ while loop )'))
         return "While loop គឺ loop ដែរចាំបាច់ត្រូវផ្ទៀតផ្ទាត់លក្ខខណ្ឌជាមុនសិនទើប execute statement របស់វា ។";

      if (this.match('(what is do while loop|ចូរអោយនិយមន័យ do  while loop )'))
         return "Do while loop គឺជា loop ដែរចាំបាច់ execute statement ជាមុនសិនទើបផ្ទៀងផ្ទាត់ជាក្រោយ ហើយដំណើរការដល់លក្ខខណ្ឌមិនពិត ។";

      if (this.match('(what is nest loop|ចូរអោយនិយមន័យ nested loop )'))
         return "Nested loop គឺជា loop statement នៅក្នុង Loop statement ផ្សេងទៀត។ ។";

        

      return "Fuck You Bruh!, I don't understand what you said...";
    };
  
    
    this.match = function (regex) {
  
      return new RegExp(regex).test(this.input);
    };
  }
  
  
  $(function () {
  
   
    var you = 'You';
    var robot = 'Chat Ai';
  
   
    var delayStart = 400;
    var delayEnd = 800;
  
    
    var bot = new chatBot();
    var chat = $('.chat');
    var waiting = 0;
    $('.busy').text(robot + ' is typing...');
  
   
    var submitChat = function () {
  
      var input = $('.input input').val();
      if (input == '') return;
  
      $('.input input').val('');
      updateChat(you, input);
  
      var reply = bot.respondTo(input);
      if (reply == null) return;
  
      var latency = Math.floor(Math.random() * (delayEnd - delayStart) + delayStart);
      $('.busy').css('display', 'block');
      waiting++;
      setTimeout(function () {
        if (typeof reply === 'string') {
          updateChat(robot, reply);
        } else {
          for (var r in reply) {
            updateChat(robot, reply[r]);
          }
        }
        if (--waiting == 0) $('.busy').css('display', 'none');
      }, latency);
    };
  
    var updateChat = function (party, text) {
  
      var style = 'you';
      if (party != you) {
        style = 'other';
      }
  
      var line = $('<div><span class="party"></span> <span class="text"></span></div>');
      line.find('.party').addClass(style).text(party + ':');
      line.find('.text').text(text);
  
      chat.append(line);
  
      chat.stop().animate({ scrollTop: chat.prop("scrollHeight") });
  
    };
  
  
    $('.input').bind('keydown', function (e) {
      if (e.keyCode == 13) {
        submitChat();
      }
    });
    $('.input a').bind('click', submitChat);
  
  
    updateChat(robot, 'Hello,I am Ai ROBOT. How Can I help you Now ?');
  
  });