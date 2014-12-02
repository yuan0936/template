ctrl.startup = function() {
	if ('<%=bi.client.category%>' === 'mobile') { 		
		ctrl.sel(".wrapper").addClass('mobile');			
	}
	nav();
};

function nav() {
	var i=0;
	ctrl.sel('#sequence ul li').hide();
	ctrl.sel('#sequence ul li:eq(0)').show();	

    // mobile、screen(max-width:820px)
    ctrl.sel('.prev').click(function() {
    	i--;
	    if(i<0){i=0}
        ctrl.sel("#sequence ul li").hide();
        ctrl.sel("#sequence ul li:eq("+i+")").fadeIn(1000);        
    });

    ctrl.sel('.next').click(function() {
    	i++;
	    if(i>1){i=1}
        ctrl.sel("#sequence ul li").hide();
        ctrl.sel("#sequence ul li:eq("+i+")").fadeIn(1000);        
    });

    // desktop、tablet
    ctrl.sel('#nav li').click(function(event) {
        var num=$(this).index()

        ctrl.sel("#sequence ul li").hide();
        ctrl.sel("#sequence ul li:eq("+num+")").fadeIn(1000);

        ctrl.sel("#nav li span").removeClass("active")
        ctrl.sel("#nav li span:eq("+num+")").addClass("active")             
    }); 
};
