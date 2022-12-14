// Generated by CoffeeScript 1.12.7
(function() {
  var codeTime, commentTime, finalStyle, isOn, openComment, skip, styles, writeStyleChar, writeStyles;

  styles = "/*\n * \"my love gift\"ð v0.0.1\n * Authored by Cyrus\n */\n\nbody {\n  background-color: #1a1c24; color: #fff;\n  font-size: 1.0rem; line-height: 1.4;\n  -webkit-font-smoothing: subpixel-antialiased;\n}\n\n/*\n * ...\n * ...hello?\n * Hi thereï¼ææ¯ååï¼Cyrus~\n * æèäºè®¸ä¹ï¼ä¸ç¥éè¦éä½ ç¹ä»ä¹å¢~\n * åä¸ä¸ªå°ä¸è¥¿éç»ä½ å§ éä¸é¢å°å¿å¿~\n * å¯æ¯~è¦æä¹åå¢~\n * é¦ååä¸ä¸ªæ¡æ¡æ¥æ¾æä»¬çä»£ç å§\n * é£ä¹~å¼å¨å¦ï¼ï¼\n */\n\npre {\n  position: fixed;\n  top: 30px; bottom: 30px;\n  transition: left 500ms;\n  overflow: auto;\n  background-color: #313744; color: #a6c3d4;\n  border: 1px solid rgba(0,0,0,0.2);\n  padding: 24px 12px;\n  box-sizing: border-box;\n  border-radius: 3px;\n  box-shadow: 0px 4px 0px 2px rgba(0,0,0,0.1);\n}\n\n/*\n * ä¸è¡ä¸è¡ï¼å¨æ¯ç½è²çä»£ç é½è¦çæäº\n * æéè¦è¯­æ³é«äº®~é£æä»¬å°±å¨æå®ç°ä¸ä¸å®å§~\n * Colors based on Base16 Ocean Dark\n */\n\npre em:not(.comment) { font-style: normal; }\n\n.comment       { color: #707e84; }\n.selector      { color: #c66c75; }\n.selector .key { color: #c66c75; }\n.key           { color: #c7ccd4; }\n.value         { color: #d5927b; }\n\n\n/*\n * å¦å¼ä½ ç~ä»£ç é«äº®å®ç°å¦~æ¥ä¸æ¥æä»¬å¼å·¥å§ï¼\n * é¦åæä»¬æè¿ä¸ªä»£ç æ¡ç§»ä¸ä¸å§~å®å¤ªå å°æ¹å¦\n * ç±äºæ¯ååºå¼å¸å±~æä»¥å¨ææºä¸åçµèä¸æä¸åçæ¾ç¤ºææå¦\n */\n\n@media screen and (max-width: 768px) {\n    pre { left: 6%;right: 6%;top: 50%; }\n}\n\n@media screen and (min-width: 768px) {\n    pre { width: 48%;left: 50%;bottom: 30px; }\n}\n\n/*\n * ç¨ä»£ç åä¸é¢å°å¿å¿ï¼\n */\n\n@media screen and (max-width: 768px) {\n    #heart, #echo {\n        position: fixed;\n        width: 300px; height: 300px;\n        margin: 30px auto;\n        left: 0; right: 0;\n        text-align: center;\n        -webkit-transform: scale(0.95);\n        transform: scale(0.95);\n    }\n}\n\n@media screen and (min-width: 768px) {\n    #heart, #echo {\n      position: fixed;\n      width: 300px; height: 300px;\n      top: calc(50% - 150px); left: calc(25% - 150px);\n      text-align: center;\n      -webkit-transform: scale(0.95);\n              transform: scale(0.95);\n    }\n}\n\n#heart { z-index: 8; }\n#echo  { z-index: 7; }\n\n#heart::before, #heart::after, #echo::before, #echo::after {\n    content: '';\n    position: absolute;\n    top: 40px;\n    width: 150px; height: 240px;\n    background: #c66c75;\n    border-radius: 150px 150px 0 0;\n    -webkit-transform: rotate(-45deg);\n            transform: rotate(-45deg);\n    -webkit-transform-origin: 0 100%;\n            transform-origin: 0 100%;\n}\n\n#heart::before, #echo::before {\n  left: 150px;\n}\n\n#heart::after, #echo::after {\n  left: 0;\n  -webkit-transform: rotate(45deg);\n          transform: rotate(45deg);\n  -webkit-transform-origin: 100% 100%;\n          transform-origin: 100% 100%;\n}\n\n/* ç»å®å ä¸ä¸ç¹é´å½±ww */\n\n#heart::after {\n  box-shadow:\n    inset -6px -6px 0px 6px rgba(255,255,255,0.1);\n}\n\n#heart::before {\n  box-shadow:\n    inset 6px 6px 0px 6px rgba(255,255,255,0.1);\n}\n\n/*\n * è¿å¯æ¯~æçå°å¿å¿~\n * æè¦ç»å®ç­¾ä¸æçåå­ï¼\n * >v<\n */\n\n#heart i::before {\n  content: 'Cyrus';\n  position: absolute;\n  z-index: 9;\n  width: 100%;\n  top: 35%; left: 0;\n  font-style: normal;\n  color: rgba(255,255,255,0.8);\n  font-weight: 100;\n  font-size: 30px;\n  text-shadow: -1px -1px 0px rgba(0,0,0,0.2);\n}\n\n/*\n * æ¥ä¸æ¥åä»ä¹å¢~\n * æä»¬è®©è¿é¢å¿è·³èµ·æ¥å§ï¼\n */\n\n@-webkit-keyframes heartbeat {\n  0%, 100% {\n    -webkit-transform: scale(0.95);\n            transform: scale(0.95);\n  }\n  50% {\n    -webkit-transform: scale(1.00);\n            transform: scale(1.00);\n  }\n}\n\n@keyframes heartbeat {\n  0%, 100% { transform: scale(0.95); }\n  50%      { transform: scale(1.00); }\n}\n\n@-webkit-keyframes echo {\n  0%   {\n    opacity: 0.1;\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n  100% {\n    opacity: 0;\n    -webkit-transform: scale(1.4);\n            transform: scale(1.4);\n  }\n}\n\n@keyframes echo {\n  0%   {\n    opacity: 0.1;\n    transform: scale(1);\n  }\n  100% {\n    opacity: 0;\n    transform: scale(1.4);\n  }\n}\n\n/*\n * å¥½åï¼æ¥ä¸æ¥åå¤è®©å®è·³èµ·æ¥å§\n */\n\n#heart, #echo {\n  -webkit-animation-duration: 2000ms;\n          animation-duration: 2000ms;\n  -webkit-animation-timing-function:\n    cubic-bezier(0, 0, 0, 1.74);\n          animation-timing-function:\n            cubic-bezier(0, 0, 0, 1.74);\n  -webkit-animation-delay: 500ms;\n          animation-delay: 500ms;\n  -webkit-animation-iteration-count: infinite;\n          animation-iteration-count: infinite;\n  -webkit-animation-play-state: paused;\n          animation-play-state: paused;\n}\n\n#heart {\n  -webkit-animation-name: heartbeat;\n          animation-name: heartbeat;\n}\n#echo {\n  -webkit-animation-name: echo;\n          animation-name: echo;\n}\n\n/*\n * åå¤å¥½äºå~ï¼\n */\n\n#heart, #echo {\n\n/*\n * ...3...\n *\n * ...2...\n *\n * ...1...\n *\n * åç­ä¸ä¸~\n *\n */\n\n  -webkit-animation-play-state: running;\n          animation-play-state: running;\n\n/*\n * ...æ¥å¦!\n */\n\n}\n\n/*\n * è¯¶å¿~~\n * è¿æ ·æä»¬çå°å¿å¿å°±åå¥½å¦~\n * æä¹æ ·~è¿å¥½çå~~\n * Hey Olivia!\n * ç±ä½ å¦ï¼\n *\n */\n\n/*\n * \"my love gift\" v0.0.1\n * Robot rights protected under BOT License & Apache2 license\n * Inspired by pen#PwLXXP\n * è°¨ä»¥æ­¤ç½é¡µç®ç»æçOliviað\n * ä½ æå¯ç±\n */";

  finalStyle = styles;

  openComment = false;

  isOn = true;

  writeStyleChar = function(which) {
    if (which === '/' && openComment === false) {
      openComment = true;
      styles = $('#style-text').html() + which;
    } else if (which === '/' && openComment === true) {
      openComment = false;
      styles = $('#style-text').html().replace(/(\/[^\/]*\*)$/, '<em class="comment">$1/</em>');
    } else if (which === ':') {
      styles = $('#style-text').html().replace(/([a-zA-Z- ^\n]*)$/, '<em class="key">$1</em>:');
    } else if (which === ';') {
      styles = $('#style-text').html().replace(/([^:]*)$/, '<em class="value">$1</em>;');
    } else if (which === '{') {
      styles = $('#style-text').html().replace(/(.*)$/, '<em class="selector">$1</em>{');
    } else {
      styles = $('#style-text').html() + which;
    }
    $('#style-text').html(styles);
    return $('#style-tag').append(which);
  };

  writeStyles = function(message, index, interval) {
    var pre;
    if (index < message.length) {
      pre = document.getElementById('style-text');
      pre.scrollTop = pre.scrollHeight;
      writeStyleChar(message[index++]);
      if (isOn) {
        return setTimeout((function() {
          return writeStyles(message, index, openComment ? commentTime : codeTime);
        }), interval);
      }
    }
  };

  skip = function() {
    isOn = false;
    return setTimeout((function() {
      var pre;
      $('#style-text').html(finalStyle);
      $('#style-tag').html(finalStyle);
      pre = document.getElementById('style-text');
      return pre.scrollTop = pre.scrollHeight;
    }), 2 * commentTime);
  };

  $('body').append("  <style id=\"style-tag\"></style>\n<span id=\"echo\"></span>\n<span id=\"heart\"><i></i></span>\n<pre id=\"style-text\"></pre>\n  <div style = 'position: fixed;left: 30px;bottom: 10px;'>\n    <a id='skipAnimation'>è·³è¿å¨ç»</a>\n    <a style='color: #fff' href='http://carryu8023.github.io'>éæ°æ­æ¾</a>\n    <a style='color: #fff' target=\"_blank\" href='https://github.com/carryu8023'>é¡¹ç®å°å</a>\n    </div>");

  commentTime = 60;

  codeTime = 20;

  $(document).on('ready page:load', function() {
    return $('#skipAnimation').click(function() {
      return skip();
    });
  });

  writeStyles(styles, 0, commentTime);

}).call(this);
