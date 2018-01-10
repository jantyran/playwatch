if(!navigator.userAgent.match(/(iPhone|iPad|iPod|Android)/)){
//ここに書いた処理はスマホ閲覧時は無効となる
// var selectorlist = document.querySelectorAll('.shift_selector');
			// for (i = 0; i < selectorlist.length; i++) {
			// 	var s_id = selectorlist[i].getAttribute("id");
			// 	if (s_id == event.target.id) {
			// 		$('#'+this.event.target.id).css('display', 'block');
			// 	}else{
			// 		$(selectorlist[i]).css('display', 'none');
			// 	}
			// }

	//shift_selecotrs event
	function shift_selector(event){
		var s_id = event.target.id;
		var event_select;
		var selectorlist = document.querySelectorAll('.selectors');
		for (var i = selectorlist.length - 1; i >= 0; i--) {
			selectorlist[i].style.display = "none";
		}
			// $('.selectors').css('display', 'none');
		switch(s_id){
			case "shift_img":
				console.log(s_id);
				event_select = document.getElementById("img_selector");
				$(event_select).css('display', 'block');
				break;
			case "shift_board":
				console.log(s_id);
				event_select = document.getElementById("board_selector");
				$(event_select).css('display', 'block');
				break;	
			case "shift_hands":
				console.log(s_id);
				event_select = document.getElementById("hands_selector");
				$(event_select).css('display', 'block');
				break;
			case "shift_case":
				console.log(s_id);
				event_select = document.getElementById("case_selector");
				$(event_select).css('display', 'block');
				break;	
			case "shift_band":
				console.log(s_id);
				event_select = document.getElementById("band_selector");
				$(event_select).css('display', 'block');
				break;		
		}
	}




	//img_selector action
	// ファイルが選択されたらイベントを実行する
	document.getElementById( "file" ).addEventListener( "change", function() {

		//file reset
		var upimg = document.getElementById("upimg");
		if(upimg){
			document.getElementById( "upimg" ).src = "" ;
			document.getElementById( "upimg" ).style.top = 20+'px';
			document.getElementById( "upimg" ).style.left = 20+'px';
			document.getElementById( "upimg" ).style.width = 15+'vh';

		}
		// フォームで選択された全ファイルを取得
		var fileList = this.files ;

		// 個数分の画像を表示する
		for( var i=0,l=fileList.length; l>i; i++ ) {
			// [FileReader]クラスを起動
			var fileReader = new FileReader() ;

			// 読み込み後の処理を決めておく
			fileReader.onload = function() {
				// データURIを取得
				var dataUri = this.result ;

				// HTMLに書き出し (src属性にデータURIを指定)
				document.getElementById( "upimg" ).src = dataUri ;
				
			}
		
			// ファイルをデータURIとして読み込む
			fileReader.readAsDataURL( fileList[i] ) ;
			
		}

	} ) ;


	function c_control(e){
		var upimg = document.getElementById('upimg');
		var rect = $('#upimg').position();
		// var rect = upimg.getBoundingClientRect();
		var file = document.getElementById('file');
		console.log(rect.left);
		console.log(rect.top);
		console.log(upimg.style.top);
		if (e === 1) {
			upimg.style.top = rect.top-1 + "px";
		}else if(e === 2){
			upimg.style.left = rect.left-1 + "px";
		}else if(e === 3){
			upimg.style.left = rect.left+1 + "px";
		}else if(e === 4){
			upimg.style.top = rect.top+1 + "px";
		}else if (e === 5) {
			document.getElementById( "upimg" ).src = "" ;
		}
	};

	var mousedownID = -1;  //Global ID of mouse down interval
	function mousedown(event) {
	  if(mousedownID==-1)  //Prevent multimple loops!
	     mousedownID = setInterval(function(){whilemousedown(event);}, 50 /*execute every 100ms*/);
	}
	function mouseup(event) {
	   if(mousedownID!=-1) {  //Only stop if exists
	     clearInterval(mousedownID);
	     mousedownID=-1;
	   }
	}
	function whilemousedown(event) {
		var upimg = document.getElementById('upimg');
		var rect = $('#upimg').position();
		var width = upimg.clientWidth;
		console.log("x ="+rect.left);
		console.log("y ="+rect.top);
		console.log("width ="+width)
	   	if (event.id == 'top') {
			upimg.style.top = rect.top-1 + "px";
		}else if(event.id == 'left'){
			upimg.style.left = rect.left-1 + "px";
		}else if(event.id == 'right'){
			upimg.style.left = rect.left+1 + "px";
		}else if(event.id == 'bottom'){
			upimg.style.top = rect.top+1 + "px";
		}else if(event.id == 'bigger'){
			upimg.style.width = width+1 + "px";
		}else if(event.id == 'smaller'){
			upimg.style.width = width-1 + "px";
		}
	}



	//board_selector action
	function shift_board(e){
		console.log($('#board').css('backgroundImage'));
		console.log(e);
		if (e === 5) {
			$('#board').css('display', 'none');
		}else{
			switch(e){
				case 0:
					var img_url = 'images/board_imgs/board0.png';
				break;
				case 1:
					var img_url = 'images/board_imgs/board1.png';
				break;
				case 2:
					var img_url = 'images/board_imgs/board2.png';
				break;
				case 3:
					var img_url = 'images/board_imgs/board3.png';
				break;
				case 4:
					var img_url = 'images/board_imgs/board4.png';
				break;
			}
			$('#board').css('display', 'block');
			$('#board').css('background-image', 'url('+img_url+')');
		}
		
	}

	//hands_selector event
	function shift_hands(e){
		var s_id = e.target.id;
		console.log(s_id);
		var url = '<img src="images/hands_imgs/'+s_id+'.png" id="hands_img">';
		console.log(url);
		document.getElementById('o_hands_img').innerHTML= url;
	}

	//case_selector event
	function shift_case(e){
		var s_id = e.target.id;
		console.log(s_id);
		var url = '<img src="images/case_imgs/'+s_id+'.png" id="case_img">';
		console.log(url);
		document.getElementById('o_case_img').innerHTML= url;
	}

	//band_selector event
	function shift_band(e){
		var s_id = e.target.id;
		console.log(s_id);
		var url = '<img src="images/band_imgs/'+s_id+'.png" id="band_img">';
		console.log(url);
		document.getElementById('o_band_img').innerHTML= url;
	}







	//Assign events
	//img_selector
	var btn_top = document.querySelector('#top');
	btn_top.addEventListener("mousedown", function(){mousedown(btn_top);});
	btn_top.addEventListener("touchstart", function(){mousedown(btn_top);});

	var btn_left = document.querySelector('#left')
	btn_left.addEventListener("touchstart", function(){mousedown(btn_left);});
	btn_left.addEventListener("mousedown", function(){mousedown(btn_left);});

	var btn_right = document.querySelector('#right')
	btn_right.addEventListener("mousedown", function(){mousedown(btn_right);});
	btn_right.addEventListener("touchstart", function(){mousedown(btn_right);});

	var btn_bottom = document.querySelector('#bottom')
	btn_bottom.addEventListener("mousedown", function(){mousedown(btn_bottom);});
	btn_bottom.addEventListener("touchstart", function(){mousedown(btn_bottom);});

	var btn_bigger = document.querySelector('#bigger')
	btn_bigger.addEventListener("mousedown", function(){mousedown(btn_bigger);});
	btn_bigger.addEventListener("touchstart", function(){mousedown(btn_bigger);});

	var btn_smaller = document.querySelector('#smaller')
	btn_smaller.addEventListener("mousedown", function(){mousedown(btn_smaller);});
	btn_smaller.addEventListener("touchstart", function(){mousedown(btn_smaller);});

	var btn_reset = document.querySelector('#reset')
	btn_reset.addEventListener("click", function(){c_control(5);});
	btn_reset.addEventListener("touchstart", function(){mousedown(btn_reset);});


	document.addEventListener("mouseup", mouseup);
	document.addEventListener("touchend", mouseup);
	//Also clear the interval when user leaves the window with mouse
	document.addEventListener("mouseout", mouseup);

	//board_selector
	var r_boards = document.querySelectorAll('.board_type');
	for(var i=0; i<r_boards.length; i++){
		switch(i){
			case i=0:
				r_boards[i].addEventListener("click", function(){shift_board(0);});
				break;
			case i=1:
				r_boards[i].addEventListener("click", function(){shift_board(1);});
				break;
			case i=2:
				r_boards[i].addEventListener("click", function(){shift_board(2);});
				break;
			case i=3:
				r_boards[i].addEventListener("click", function(){shift_board(3);});
				break;
			case i=4:
				r_boards[i].addEventListener("click", function(){shift_board(4);});
				break
			case i=5:
				r_boards[i].addEventListener("click", function(){shift_board(5);});
				break;
		}
	}


	//hands_selector
	var r_hands = document.querySelectorAll('.hands_type');
	for(var i=0; i<r_hands.length; i++){
		s_id = r_hands[i].getAttribute("id");
		console.log(r_hands[i]);
		console.log(s_id);
		r_hands[i].addEventListener("click", function(s_id){shift_hands(s_id);});
	}

	//band_selector
	var r_band = document.querySelectorAll('.band_type');
	for(var i=0; i<r_band.length; i++){
		s_id = r_band[i].getAttribute("id");
		console.log(r_band[i]);
		console.log(s_id);
		r_band[i].addEventListener("click", function(s_id){shift_band(s_id);});
	}

	//case_selector
	var r_case = document.querySelectorAll('.case_type');
	for(var i=0; i<r_case.length; i++){
		s_id = r_case[i].getAttribute("id");
		console.log(r_case[i]);
		console.log(s_id);
		r_case[i].addEventListener("click", function(s_id){shift_case(s_id);});
	}

 	//shift_selctors
	var g_selectorlist = new Array();
	var s_id;
	g_selectorlist = document.querySelectorAll('.shift_selector');
	 for (i = 0; i < g_selectorlist.length; i++) {
		s_id = g_selectorlist[i].getAttribute("id");
		console.log(g_selectorlist[i]);
		console.log(s_id);
		g_selectorlist[i].addEventListener("click", function(s_id){shift_selector(s_id);});
	 }
	

	//scroll fix output
	// $(function() {
	//     var wristwatch = $('#wristwatch');
	//     //navの位置    
	//     var watch_top = wristwatch.offset().top;
	//     //スクロールするたびに実行
	//     $(window).scroll(function () {
	//         var winTop = $(this).scrollTop();
	//         //スクロール位置がnavの位置より下だったらクラスfixedを追加
	//         if (winTop >= watch_top) {
	//             wristwatch.addClass('fixed');
	//             wristwatch.removeClass('absolute');
	//         } else if (winTop <= watch_top) {
	//             wristwatch.removeClass('fixed');
	//             wristwatch.addClass('absolute');
	//         }
	//     });
	// });

	(function() {
		img_move();

		// img_scale();
	}());


	// 移動
	//　参考　https://q-az.net/elements-drag-and-drop/
	function　img_move(){
	    //要素の取得
	    var element = document.getElementById("upimg");
	    console.log("img_move");
	    //要素内のクリックされた位置を取得するグローバル（のような）変数
	    var x;
	    var y;

	    //マウスが要素内で押されたとき、又はタッチされたとき発火
	    console.log(element);
        element.addEventListener("mousedown", mdown, false);
        element.addEventListener("touchstart", mdown, {passive: false});

	    //マウスが押された際の関数
	    function mdown(e) {
	    	console.log(e);
    	
	    	console.log("mdown");
	    	console.log(e);

	        //クラス名に .drag を追加
	        this.classList.add("drag");

	        //タッチデイベントとマウスのイベントの差異を吸収
	        if(e.type === "mousedown") {
	            var event = e;
	        } else {
	            var event = e.changedTouches[0];
	        }

	        //要素内の相対座標を取得
	        x = event.pageX - this.offsetLeft;
	        y = event.pageY - this.offsetTop;

	        //ムーブイベントにコールバック
	        document.body.addEventListener("mousemove", mmove, {passive: false});
	        document.body.addEventListener("touchmove", mmove, {passive: false});
    
	    }

	    //マウスカーソルが動いたときに発火
	    function mmove(e) {
	    	console.log("mmove");
	    	console.log(e);

	        //ドラッグしている要素を取得
	        var drag = document.getElementsByClassName("drag")[0];

	        //同様にマウスとタッチの差異を吸収
	        if(e.type === "mousemove") {
	            var event = e;
	        } else {
	            var event = e.changedTouches[0];
	        }

	        //フリックしたときに画面を動かさないようにデフォルト動作を抑制
	        e.preventDefault();

	        //マウスが動いた場所に要素を動かす
	        drag.style.top = event.pageY - y + "px";
	        drag.style.left = event.pageX - x + "px";

	        //マウスボタンが離されたとき、またはカーソルが外れたとき発火
	        drag.addEventListener("mouseup", mup, false);
	        document.body.addEventListener("mouseleave", mup, false);
	        drag.addEventListener("touchend", mup, false);
	        document.body.addEventListener("touchleave", mup, false);

	    }

	    //マウスボタンが上がったら発火
	    function mup(e) {
	        var drag = document.getElementsByClassName("drag")[0];

	        //ムーブベントハンドラの消去
	        document.body.removeEventListener("mousemove", mmove, false);
	        // drag.removeEventListener("mouseup", mup, false);
	        document.body.removeEventListener("touchmove", mmove, false);
	        // drag.removeEventListener("touchend", mup, false);

	        //クラス名 .drag も消す
	        drag.classList.remove("drag");	
	    }

	}
// until here sp ignore
}






// =================================================================================================================

//SP only
if(navigator.userAgent.match(/(iPhone|iPad|iPod|Android)/)){


	function shift_selector(event){
		var s_id = event.target.id;
		var event_select;
		var selectorlist = document.querySelectorAll('.sp_selectors');
		for (var i = selectorlist.length - 1; i >= 0; i--) {
			selectorlist[i].style.display = "none";
		}
			// $('.selectors').css('display', 'none');
		switch(s_id){
			case "sp_shift_img":
				console.log(s_id);
				event_select = document.getElementById("sp_img_selector");
				$(event_select).css('display', 'block');
				break;
			case "sp_shift_board":
				console.log(s_id);
				event_select = document.getElementById("sp_board_selector");
				$(event_select).css('display', 'block');
				break;	
			case "sp_shift_hands":
				console.log(s_id);
				event_select = document.getElementById("sp_hands_selector");
				$(event_select).css('display', 'block');
				break;
			case "sp_shift_case":
				console.log(s_id);
				event_select = document.getElementById("sp_case_selector");
				$(event_select).css('display', 'block');
				break;	
			case "sp_shift_band":
				console.log(s_id);
				event_select = document.getElementById("sp_band_selector");
				$(event_select).css('display', 'block');
				break;		
		}
	}




	//img_selector action
	// ファイルが選択されたらイベントを実行する
	document.getElementById( "sp_file" ).addEventListener( "change", function() {
		
		// //file reset
		var upimg = document.getElementById("sp_upimg");
		if(upimg){
			document.getElementById( "sp_upimg" ).src = "" ;
			
		}
		// フォームで選択された全ファイルを取得
		var fileList = this.files ;

		// 個数分の画像を表示する
		for( var i=0,l=fileList.length; l>i; i++ ) {
			// [FileReader]クラスを起動
			var fileReader = new FileReader() ;

			// 読み込み後の処理を決めておく
			fileReader.onload = function() {
				// データURIを取得
				var dataUri = this.result ;

				// HTMLに書き出し (src属性にデータURIを指定)
				document.getElementById( "sp_upimg" ).src = dataUri ;
			}

			// ファイルをデータURIとして読み込む
			fileReader.readAsDataURL( fileList[i] ) ;
		}
		
	});




	function c_control(e){

		var upimg = document.getElementById('sp_upimg');
		var rect = $('#sp_upimg').position();
		var rect = upimg.getBoundingClientRect();
		var file = document.getElementById('sp_file');
		console.log(rect.left);
		console.log(rect.top);
		console.log(upimg.style.top);
		if (e === 1) {
			upimg.style.top = rect.top-1 + "px";
		}else if(e === 2){
			upimg.style.left = rect.left-1 + "px";
		}else if(e === 3){
			upimg.style.left = rect.left+1 + "px";
		}else if(e === 4){
			upimg.style.top = rect.top+1 + "px";
		}else if (e === 5) {
			console.log(document.getElementById( "sp_upimg" ));
			document.getElementById( "sp_upimg" ).src = "" ;
			console.log(document.getElementById( "sp_upimg" ));
		}
	};

	var mousedownID = -1;  //Global ID of mouse down interval
	function mousedown(event) {
	  if(mousedownID==-1)  //Prevent multimple loops!
	     mousedownID = setInterval(function(){whilemousedown(event);}, 50 /*execute every 100ms*/);
	}
	function mouseup(event) {
	   if(mousedownID!=-1) {  //Only stop if exists
	     clearInterval(mousedownID);
	     mousedownID=-1;
	   }
	}
	function whilemousedown(event) {
		var upimg = document.getElementById('sp_upimg');
		var rect = $('#sp_upimg').position();
		var width = upimg.clientWidth;
		console.log("x ="+rect.left);
		console.log("y ="+rect.top);
		console.log("width ="+width)
	   	if (event.id == 'sp_top') {
			upimg.style.top = rect.top-1 + "px";
		}else if(event.id == 'sp_left'){
			upimg.style.left = rect.left-1 + "px";
		}else if(event.id == 'sp_right'){
			upimg.style.left = rect.left+1 + "px";
		}else if(event.id == 'sp_bottom'){
			upimg.style.top = rect.top+1 + "px";
		}else if(event.id == 'sp_bigger'){
			upimg.style.width = width+1 + "px";
		}else if(event.id == 'sp_smaller'){
			upimg.style.width = width-1 + "px";
		}
	}



	//board_selector action
	function shift_board(e){
		console.log($('#sp_board').css('backgroundImage'));
		console.log(e);
		if (e === 5) {
			$('#sp_board').css('display', 'none');
		}else{
			switch(e){
				case 0:
					var img_url = 'images/board_imgs/board0.png';
				break;
				case 1:
					var img_url = 'images/board_imgs/board1.png';
				break;
				case 2:
					var img_url = 'images/board_imgs/board2.png';
				break;
				case 3:
					var img_url = 'images/board_imgs/board3.png';
				break;
				case 4:
					var img_url = 'images/board_imgs/board4.png';
				break;
			}
			$('#sp_board').css('display', 'block');
			$('#sp_board').css('background-image', 'url('+img_url+')');
		}
	}

	//hands_selector event
	function shift_hands(e){
		console.log("test");
		var s_id = e.target.id;
		console.log(s_id);
		var re_id = s_id.replace('sp_', '');
		var url = '<img src="images/hands_imgs/'+re_id+'.png" id="sp_hands_img">';
		console.log(url);
		document.getElementById('sp_o_hands_img').innerHTML= url;
	}

	//case_selector event
	function shift_case(e){
		console.log("test");
		var s_id = e.target.id;
		console.log(s_id);
		var re_id = s_id.replace('sp_', '');
		var url = '<img src="images/case_imgs/'+re_id+'.png" id="sp_case_img">';
		console.log(url);
		document.getElementById('sp_o_case_img').innerHTML= url;
	}

	//band_selector event
	function shift_band(e){
		console.log("test");
		var s_id = e.target.id;
		console.log(s_id);
		var re_id = s_id.replace('sp_', '');
		var url = '<img src="images/band_imgs/'+re_id+'.png" id="sp_band_img">';
		console.log(url);
		document.getElementById('sp_o_band_img').innerHTML= url;
	}







	//Assign events
	//img_selector
	var btn_top = document.querySelector('#sp_top');
	btn_top.addEventListener("mousedown", function(){mousedown(btn_top);});
	btn_top.addEventListener("touchstart", function(){mousedown(btn_top);});

	var btn_left = document.querySelector('#sp_left')
	btn_left.addEventListener("touchstart", function(){mousedown(btn_left);});
	btn_left.addEventListener("mousedown", function(){mousedown(btn_left);});

	var btn_right = document.querySelector('#sp_right')
	btn_right.addEventListener("mousedown", function(){mousedown(btn_right);});
	btn_right.addEventListener("touchstart", function(){mousedown(btn_right);});

	var btn_bottom = document.querySelector('#sp_bottom')
	btn_bottom.addEventListener("mousedown", function(){mousedown(btn_bottom);});
	btn_bottom.addEventListener("touchstart", function(){mousedown(btn_bottom);});

	var btn_bigger = document.querySelector('#sp_bigger')
	btn_bigger.addEventListener("mousedown", function(){mousedown(btn_bigger);});
	btn_bigger.addEventListener("touchstart", function(){mousedown(btn_bigger);});

	var btn_smaller = document.querySelector('#sp_smaller')
	btn_smaller.addEventListener("mousedown", function(){mousedown(btn_smaller);});
	btn_smaller.addEventListener("touchstart", function(){mousedown(btn_smaller);});

	var btn_reset = document.querySelector('#sp_reset')
	btn_reset.addEventListener("click", function(){console.log(document.getElementById( "sp_upimg" )); document.getElementById( "sp_upimg" ).src = "" ;});
	btn_reset.addEventListener("touchstart", function(){
		document.getElementById( "sp_upimg" ).src = "" ;
		document.getElementById( "sp_upimg" ).style.top = 20+'px';
		document.getElementById( "sp_upimg" ).style.left = 20+'px';
		document.getElementById( "sp_upimg" ).style.width = 15+'vh';
	});


	document.addEventListener("mouseup", mouseup);
	document.addEventListener("touchend", mouseup);
	//Also clear the interval when user leaves the window with mouse
	document.addEventListener("mouseout", mouseup);


	//board_selector
	var r_boards = document.querySelectorAll('.sp_board_type');
	for(var i=0; i<r_boards.length; i++){
		switch(i){
			case i=0:
				r_boards[i].addEventListener("click", function(){shift_board(0);});
				r_boards[i].addEventListener("touchstart", function(){shift_board(0);});
				break;
			case i=1:
				r_boards[i].addEventListener("click", function(){shift_board(1);});
				r_boards[i].addEventListener("touchstart", function(){shift_board(1);});
				break;
			case i=2:
				r_boards[i].addEventListener("click", function(){shift_board(2);});
				r_boards[i].addEventListener("touchstart", function(){shift_board(2);});
				break;
			case i=3:
				r_boards[i].addEventListener("click", function(){shift_board(3);});
				r_boards[i].addEventListener("touchstart", function(){shift_board(3);});
				break;
			case i=4:
				r_boards[i].addEventListener("click", function(){shift_board(4);});
				r_boards[i].addEventListener("touchstart", function(){shift_board(4);});
				break
			case i=5:
				r_boards[i].addEventListener("click", function(){shift_board(5);});
				r_boards[i].addEventListener("touchstart", function(){shift_board(5);});
				break;
		}
	}

	//hands_selector
	var r_hands = document.querySelectorAll('.sp_hands_type');
	for(var i=0; i<r_hands.length; i++){
		s_id = r_hands[i].getAttribute("id");
		console.log(r_hands[i]);
		console.log(s_id);
		r_hands[i].addEventListener("click", function(s_id){shift_hands(s_id);});
		r_hands[i].addEventListener("touchstart", function(s_id){shift_hands(s_id);});
	}

	//band_selector
	var r_band = document.querySelectorAll('.sp_band_type');
	for(var i=0; i<r_band.length; i++){
		s_id = r_band[i].getAttribute("id");
		console.log(r_band[i]);
		console.log(s_id);
		r_band[i].addEventListener("click", function(s_id){shift_band(s_id);});
		r_band[i].addEventListener("touchstart", function(s_id){shift_band(s_id);});
	}


	//case_selector
	var r_case = document.querySelectorAll('.sp_case_type');
	for(var i=0; i<r_case.length; i++){
		s_id = r_case[i].getAttribute("id");
		console.log(r_case[i]);
		console.log(s_id);
		r_case[i].addEventListener("click", function(s_id){shift_case(s_id);});
		r_case[i].addEventListener("touchstart", function(s_id){shift_case(s_id);});
	}

	//shift_selctors
	var g_selectorlist = new Array();
	var s_id;
	g_selectorlist = document.querySelectorAll('.sp_shift_selector');
	 for (i = 0; i < g_selectorlist.length; i++) {
		s_id = g_selectorlist[i].getAttribute("id");
		console.log(g_selectorlist[i]);
		console.log(s_id);
		g_selectorlist[i].addEventListener("click", function(s_id){shift_selector(s_id);});
		g_selectorlist[i].addEventListener("touchstart", function(s_id){shift_selector(s_id);});
	}	
	
	//scroll fix output
	$(function() {
		console.log("change");
	    var watch_space = $('#sp_watch_space');
	    //navの位置    
	    var watch_top = watch_space.offset().top;
	    //スクロールするたびに実行
	    $(window).scroll(function () {
	        var winTop = $(this).scrollTop();
	        //スクロール位置がnavの位置より下だったらクラスfixedを追加
	        if (winTop >= watch_top) {
	            watch_space.addClass('sp_fixed');
	            watch_space.removeClass('sp_absolute');
	        } else if (winTop <= watch_top) {
	            watch_space.removeClass('sp_fixed');
	            watch_space.addClass('sp_absolute');
	        }
	    });
	});

	 // 移動　拡大・縮小　タッチ対応
	
	(function() {
		img_move();
		// img_scale();
	}());


	// 移動
	//　参考　https://q-az.net/elements-drag-and-drop/
	function　img_move(){
	    //要素の取得
	    var element = document.getElementById("sp_upimg");
	    console.log("img_move");
	    //要素内のクリックされた位置を取得するグローバル（のような）変数
	    var x;
	    var y;

	    //マウスが要素内で押されたとき、又はタッチされたとき発火
	    console.log(element);
        element.addEventListener("mousedown", mdown, {passive: false});
        element.addEventListener("touchstart", mdown, {passive: false});

	    //マウスが押された際の関数
	    function mdown(e) {
	    	console.log(e);
	    	if (e.touches.length === 1) {
		    	console.log("mdown");
		    	console.log(e);

		        //クラス名に .drag を追加
		        this.classList.add("drag");

		        //タッチデイベントとマウスのイベントの差異を吸収
		        if(e.type === "mousedown") {
		            var event = e;
		        } else {
		            var event = e.changedTouches[0];
		        }

		        //要素内の相対座標を取得
		        x = event.pageX - this.offsetLeft;
		        y = event.pageY - this.offsetTop;

		        //ムーブイベントにコールバック
		        document.body.addEventListener("mousemove", mmove, {passive: false});
		        document.body.addEventListener("touchmove", mmove, {passive: false});
	    	}
	    }

	    //マウスカーソルが動いたときに発火
	    function mmove(e) {
	    	console.log("mmove");
	    	console.log(e);

	        //ドラッグしている要素を取得
	        var drag = document.getElementsByClassName("drag")[0];

	        //同様にマウスとタッチの差異を吸収
	        if(e.type === "mousemove") {
	            var event = e;
	        } else {
	            var event = e.changedTouches[0];
	        }

	        //フリックしたときに画面を動かさないようにデフォルト動作を抑制
	        e.preventDefault();

	        //マウスが動いた場所に要素を動かす
	        drag.style.top = event.pageY - y + "px";
	        drag.style.left = event.pageX - x + "px";

	        //マウスボタンが離されたとき、またはカーソルが外れたとき発火
	        drag.addEventListener("mouseup", mup, false);
	        document.body.addEventListener("mouseleave", mup, false);
	        drag.addEventListener("touchend", mup, false);
	        document.body.addEventListener("touchleave", mup, false);

	    }

	    //マウスボタンが上がったら発火
	    function mup(e) {
	        var drag = document.getElementsByClassName("drag")[0];

	        //ムーブベントハンドラの消去
	        document.body.removeEventListener("mousemove", mmove, false);
	        drag.removeEventListener("mouseup", mup, false);
	        document.body.removeEventListener("touchmove", mmove, false);
	        drag.removeEventListener("touchend", mup, false);

	        //クラス名 .drag も消す
	        drag.classList.remove("drag");	
	    }

	}

	// 拡大・縮小 http://ara-web.net/blog/android/post-3265/
	function img_scale(){
		console.log("img_scale");

		var ratio=1;
		var sp_upimg = document.getElementById('sp_upimg');
		var width = sp_upimg.clientWidth;
	    var w = document.getElementById('sp_upimg').width;
	    var h = document.getElementById('sp_upimg').height;
	 
	    var touchstart_bar = 0;
	    var touchmove_bar = 0;
	    el = window;
	    //タッチの場合
	    el.addEventListener('touchstart',function(e){
	        if(e.touches.length > 1){
	            //絶対値を取得
	            w_abs_start = Math.abs(e.touches[1].pageX - e.touches[0].pageX);
	            h_abs_start = Math.abs(e.touches[1].pageY - e.touches[0].pageY);
	            //はじめに2本指タッチした時の面積
	            touchstart_bar = w_abs_start*h_abs_start;
	        }
	    },false);
	      
	    //ムーブの場合
	   	el.addEventListener('touchmove', function(e) {
	    	console.log("img_scale_tmove");
	    	
	        if(e.touches.length > 1){
	        	console.log("img_scale_tmove > 1");
	        	console.log(w);
	    		console.log(h);
	            //絶対値を取得
	            w_abs_move = Math.abs(e.touches[1].pageX - e.touches[0].pageX);
	            h_abs_move = Math.abs(e.touches[1].pageY - e.touches[0].pageY);

	            //ムーブした時の面積
	            touchmove_bar = w_abs_move*h_abs_move;
	            //はじめに2タッチ面積からムーブした時の面積を引く
	            area_bar = touchstart_bar-touchmove_bar;


	            if(area_bar<0){//拡大する
	                ratio *= 1.01;
	                
	            }
	            else if(area_bar>0){//縮小する
	                ratio *= 0.99;
	            }
	            document.getElementById('sp_upimg').style.width = width*ratio + "px";
	            console.log(document.getElementById('sp_upimg').style.width);
	        }
	              
	    });
	//end img_scale	
	}

//ここに書いた処理はスマホ閲覧時のみ有効となる
}







//canvas data作成
function screenshot(selector) {
	console.log("screenshot_start");
	var element;
    element = $(selector)[0];
    element.setAttribute('crossOrigin', 'anonymous');
    console.log("html2canvas_before");
    html2canvas(element, { onrendered: function(canvas) {
    	console.log("html2canvas_start");
    	var imgData = new Image();
    	imgData.setAttribute('crossOrigin', 'anonymous');
        imgData.src = canvas.toDataURL('image/png');
        
       //  imgData.id = 'create_img';
  
       //  var objBody = document.getElementsByTagName("body").item(0); 
  	    // objBody.appendChild(imgData); 
  	    var create_img = document.getElementById('create_img');
  	    // console.log(create_img.src);

  	    
  // 	    var input = document.createElement("input");
  // 	    input.setAttribute('crossOrigin', 'anonymous');
		// input.type = "hidden";
		// var val_src = canvas.toDataURL('image/png');
		// input.val(val_src);
		// input.attr('id', 'comp_input'); // set the CSS class
		// $('#complete_form').append(input); // put it into the DOM
		// var s_input = document.getElementById(comp_input);
  // 	    console.log(s_input);

	    $('#canvas_img').attr('src', imgData.src);
	    $('#complete_img').attr('value', imgData.src);


	    // $('#canvas_img')[0].src = imgData.src;
        // $('#download')[0].href = imgData;
        // $('#download')[0].innerHTML = "Download";

        var frm = document.forms["complete_form"];
        // document.getElementById('complete_img').value = canvas.toDataURL('image/png');
		frm.action="play_complete.php";
	    frm.method="post";
	    frm.submit();
    }});
    console.log("screenshot_end");
}


// // page移行
// function sendData(){
// 	console.log("sendData_start");
// 	var frm = document.forms["complete_form"];
// 	frm.action="play_complete.php";
//     frm.method="post";
//     frm.submit();
//     // frm.encoding="application/x-www-form-urlencoded";
//     return true;
// }




// // 完成ボタン実行
// var complete = document.getElementsByClassName('complete');
// complete[0].addEventListener("click", function(){
// 	var deferred = new $.Deferred();
// 	$.when(
// 		CanvalHD(),
// 		console.log("screenshot"),
// 		screenshot('#sp_wristwatch')
// 	).done(function(){
// 		// sendData();
// 	}).always(function(){
//             console.log('ajax finish');
//             //ajax処理を終了したことをDeferredオブジェクトに通知
//             deferred.resolve();
//     });
//     //完了を知らせるためにDeferredオブジェクトを生成しそれを返す
// 	return deferred;
// });

// complete[1].addEventListener("click", function(){
// 	var deferred = new $.Deferred();	
// 	$.when(
// 		console.log("screenshot"),
// 		screenshot('#sp_wristwatch')
// 	).done(function(){
// 		// sendData();
// 	}).always(function(){
//             console.log('ajax finish');
//             //ajax処理を終了したことをDeferredオブジェクトに通知
//             deferred.resolve();
//     });
//     //完了を知らせるためにDeferredオブジェクトを生成しそれを返す
// 	return deferred;
// });


// function CanvalHD(canvasThis,ctxThis){(function (canvas, ctx) {
// 	console.log("canval");
// 	var devicePixelRatio = window.devicePixelRatio || 1;
// 	var backingStorePixelRatio = ctx.webkitBackingStorePixelRatio ||
// 	ctx.mozBackingStorePixelRatio ||
// 	ctx.msBackingStorePixelRatio ||
// 	ctx.oBackingStorePixelRatio ||
// 	ctx.backingStorePixelRatio || 1;
// 	var ratio = devicePixelRatio / backingStorePixelRatio;
// 	if (devicePixelRatio !== backingStorePixelRatio) {
// 		var oldWidth = canvas.width;
// 		var oldHeight = canvas.height;
// 		canvas.width = oldWidth * ratio;
// 		canvas.height = oldHeight * ratio;
// 		canvas.style.width = oldWidth + 'px';
// 		canvas.style.height = oldHeight + 'px';
// 		ctx.scale(ratio, ratio)
// 	}
// 	})(canvasThis, ctxThis);
// }

// let completes = document.getElementsByClassName('complete');
// for(let complete of completes){
// 	complete.addEventListener("click", function(){
// 		console.log("canvas_func");
// 	    var WIDTH = 450;
// 	    var HEIGHT = 450;
// 	    var FONT_SIZE = 24;
// 	    var canvas = document.getElementById("canvas");
// 	    var dom = document.getElementById("sp_wristwatch");
// 	    var ctx = canvas.getContext("2d");
// 	    var data = 
// 	        "<svg xmlns='http://www.w3.org/2000/svg' width='"+WIDTH+"px' height='"+HEIGHT+"px'>" +
// 	            "<foreignObject width='100%' height='100%'>" +
// 	                "<div xmlns='http://www.w3.org/1999/xhtml' style='font: "+FONT_SIZE+"px sans-serif;'>" +
// 	                    dom.innerHTML+
// 	                "</div>" +
// 	            "</foreignObject>" +
// 	        "</svg>";
// 	    var DOMURL = self.URL || self.webkitURL || self;
// 	    const img_ss = new Image();
// 	    img_ss.setAttribute('crossOrigin', 'anonymous');
// 	    var svg = new Blob([data], {type: "image/svg+xml"});
// 	    var url = URL.createObjectURL(svg);
// 	    console.log(img_ss);
// 	    console.log(data);

// 	    img_ss.onload = () => {
// 	    　console.log("imgss onload")
// 		  ctx.clearRect(0, 0, canvas.width, canvas.height);
// 		  ctx.drawImage(img_ss, 0, 0);
// 		  URL.revokeObjectURL(url); // URL解放
// 		};

		// img_ss.crossOrigin = 'Anonymous';
		// img_ss.src = url;
	 //    // img_ss.addEventListener("load", function(){
	 //    	console.log("canvas listner");
	 //        DOMURL.revokeObjectURL(url);
	 //    	console.log("canvas click");
	 //        ctx.drawImage(img_ss, 0, 0);
	 //        dom.style.display = "none";
	 //        // button.removeEve ntListener("click", arguments.callee, false);
	 //    // }, false);
	 //    img_ss.src = url;
	 //    console.log(img_ss);
	 //    ctx.canvas.width = WIDTH;
	 //    ctx.canvas.height= HEIGHT;
	});
}


function dom2canvas(){
	console.log("canvas_func");
    var WIDTH = 450;
    var HEIGHT = 450;
    var FONT_SIZE = 24;
    var canvas = document.getElementById("canvas");
    var dom = document.getElementById("sp_wristwatch");
    var button = document.getElementById("button_change");
    var ctx = canvas.getContext("2d");
    var data = 
        "<svg xmlns='http://www.w3.org/2000/svg' width='"+WIDTH+"px' height='"+HEIGHT+"px'>" +
            "<foreignObject width='100%' height='100%'>" +
                "<div xmlns='http://www.w3.org/1999/xhtml' style='font: "+FONT_SIZE+"px sans-serif;'>" +
                    dom.innerHTML+
                "</div>" +
            "</foreignObject>" +
        "</svg>";
    var DOMURL = self.URL || self.webkitURL || self;
    var img_ss = new Image();
    var svg = new Blob([data], {type: "image/svg+xml;charset=utf-8"});
    var url = DOMURL.createObjectURL(svg);
    console.log(img_ss);
    img_ss.addEventListener("load", function() {
    	console.log("canvas listner");
        DOMURL.revokeObjectURL(url);
    	console.log("canvas click");
        ctx.drawImage(img_ss, 0, 0);
        dom.style.display = "none";
        button.removeEventListener("click", arguments.callee, false);
    }, false);
    img_ss.src = url;
    ctx.canvas.width = WIDTH;
    ctx.canvas.height= HEIGHT;
};




(function(doc){
    var dom = doc.getElementById("sp_wristwatch");
    var button = doc.getElementById("button_change");
    var canvas = doc.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    ctx.canvas.width = dom.offsetWidth;
    ctx.canvas.height = dom.offsetHeight;
    //console.log(dom.offsetWidth, dom.style.width);
    //console.log(dom.style, dom.style.cssText, dom.currentStyle, dom.style.font);
    //console.log(window.getComputedStyle(dom));
    
    button.addEventListener("click", function(){
        drawDom(ctx, dom);
        canvas.style.display = "block";
        button.removeEventListener("click", arguments.callee, false);
    }, false);
})(document);

function drawDom(ctx, dom) {
    //console.log(self);
    var DOMURL = self.URL || self.webkitURL || self;
    var width = dom.offsetWidth;
    var height = dom.offsetHeight;
    var style = window.getComputedStyle(dom);
    //console.log(dom.offsetWidth, dom.style.width, style.font);
    var data = 
        "<svg xmlns='http://www.w3.org/2000/svg' width='" + width + "px' height='" + height + "px'>" +
            "<foreignObject width='100%' height='100%'>" +
                //"<div xmlns='http://www.w3.org/1999/xhtml' style='" + style + "'>" +
                "<div xmlns='http://www.w3.org/1999/xhtml' style='font:" + style.font + "'>" +
                    dom.innerHTML +
                "</div>" +
            "</foreignObject>" +
        "</svg>";
    var img = new Image();
    var svg = new Blob([data], {type: "image/svg+xml;charset=utf-8"});
    var url = DOMURL.createObjectURL(svg);
    //console.log(url)
    img.addEventListener("load", function() {
        //console.log(url)
        DOMURL.revokeObjectURL(url);
        ctx.drawImage(img, 0, 0);
        dom.style.display = "none";
    }, false);
    img.src = url;
}










