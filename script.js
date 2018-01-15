window.addEventListener("load", function(){


	var sl1 = new Slider({
		images: '.s1 img',
		btnPrev: '.prev',
		btnNext: '.next',
		auto: false,
		rate: 3000
	});

	function Slider(params){
		

		var btnNext = $(params.btnNext);
		var btnPrev = $(params.btnPrev);
		var slider = this;
		this.images = $(params.images);
		this.i=0;

		var running = false;

		$(this.images[0]).width("100%");
		
		this.next = function(){
			if(running){
				return;
			}
			running = true;
			if(this.i<this.images.length-1){
				$(this.images.eq(this.i)).removeClass('rb').animate({
					width:0
				},1000);
				this.i++;
				$(this.images.eq(this.i)).addClass('rb').animate({
					width:"100%"
				},1000, function(){
					running=false;
				});
			}
		}

		this.prev = function(){
			if(running){
				return;
			}
			running = true;
			if(this.i>0){
				$(this.images.eq(this.i)).addClass('rb').animate({
					width:0,					
				},1000);
				this.i--;
				$(this.images.eq(this.i)).removeClass('rb').animate({
					width:"100%"
				},1000, function(){
					running = false;
				});
			}
		}

		if (params.auto) {
			setInterval(function(){
				slider.next();
			}, params.rate)
		}
		btnNext.on("click", function(){
			slider.next();
		});

		btnPrev.on("click", function(){
			slider.prev();
		});

	}

});