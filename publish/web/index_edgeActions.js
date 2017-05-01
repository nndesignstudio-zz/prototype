
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"document","compositionReady",function(sym,e){try{var stage=sym.getComposition().getStage();
//==================================================================

//==================================================================
var config={offsetY:970,sceneHeight:670,sceneGap:300};stage.setVariable("config",config);
//==================================================================

//==================================================================
stage.setVariable("setScrollingArea",function(pos,autoScroll){var newHeight=Math.floor(config.offsetY+pos*(config.sceneHeight+config.sceneGap)-config.sceneGap+(window.innerHeight-config.sceneHeight)/2);sym.getSymbol("content").getSymbolElement().css("height",newHeight+"px");if(autoScroll===true){newScrollTop=sym.getSymbol("content").getSymbolElement().css("height").replace("px","")-$(window).height();sym.$("contentArea").clearQueue().animate({scrollTop:newScrollTop+"px"},1000,"easeInOutQuint");}});
//==================================================================

//==================================================================
var scrollTriggers=[];var stage=sym.getComposition().getStage();stage.setVariable("registerScrollTrigger",function(args){scrollTriggers.push(args);});
//==================================================================

//==================================================================
stage.getVariable("deferred")||stage.setVariable("deferred",[]);var deferred=stage.getVariable("deferred"),i=0,length=deferred.length;for(i;i<length;i++){var registered=deferred[i];if(registered.when=="document.compositionReady"){registered.what();}}

//==================================================================

//==================================================================
sym.$("contentArea").scroll(function(a){var i=0,length=scrollTriggers.length;for(i;i<length;i++){var t=scrollTriggers[i];switch(t.type){case"minY":var globalTop=t.sym.getSymbolElement().offset().top;if(t.status=="inactive"&&globalTop<=t.min){t.sym.play();t.status="active";}
break;}}});
//==================================================================

//==================================================================
var stage=sym.getComposition().getStage(),config=stage.getVariable("config"),setScrollingArea=stage.getVariable("setScrollingArea");setScrollingArea(1);}
catch(err){console.error(err.toString());}});
//Edge binding end
})("stage");
//Edge symbol end:'stage'

//=========================================================

//Edge symbol: 'content'
(function(symbolName){})("content");
//Edge symbol end:'content'

//=========================================================

//Edge symbol: 'scene_010'
(function(symbolName){})("scene_intro");
//Edge symbol end:'scene_intro'

//=========================================================

//Edge symbol: 'scene_1'
(function(symbolName){Symbol.bindSymbolAction(compId,symbolName,"creationComplete",function(sym,e){try{var stage=sym.getComposition().getStage();stage.getVariable("deferred")||stage.setVariable("deferred",[]);var deferred=stage.getVariable("deferred");deferred.push({when:"document.compositionReady",what:function(){var registerScrollTrigger=stage.getVariable("registerScrollTrigger");registerScrollTrigger({status:"inactive",sym:sym,type:"minY",min:400});}});}
catch(err){console.error(err.toString());}});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",9750,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",13000,function(sym,e){var stage=sym.getComposition().getStage(),setScrollingArea=stage.getVariable("setScrollingArea");setScrollingArea(2);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_btnNo}","click",function(sym,e){sym.getComposition().getStage().getVariable("setScrollingArea")(2,true);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_btnYes}","click",function(sym,e){sym.play("details");});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",11500,function(sym,e){sym.getComposition().getStage().getSymbol("sidebarResults").getSymbol("AnLogo").play();sym.getComposition().getStage().getVariable("config").animate=true;});
//Edge binding end
})("scene_animate");
//Edge symbol end:'scene_animate'

//=========================================================

//Edge symbol: 'btnAbsolutely'
(function(symbolName){Symbol.bindSymbolAction(compId,symbolName,"creationComplete",function(sym,e){sym.$("hotspot").mouseenter(function(){sym.play();});sym.$("hotspot").mouseleave(function(){sym.playReverse();});});
//Edge binding end
})("btnAbsolutely");
//Edge symbol end:'btnAbsolutely'

//=========================================================

//Edge symbol: 'btnAbsolutely_1'
(function(symbolName){Symbol.bindSymbolAction(compId,symbolName,"creationComplete",function(sym,e){sym.$("hotspot").mouseenter(function(){sym.play();});sym.$("hotspot").mouseleave(function(){sym.playReverse();});});
//Edge binding end
})("btnNope");
//Edge symbol end:'btnNope'

//=========================================================

//Edge symbol: 'scene_animate_1'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",9750,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindSymbolAction(compId,symbolName,"creationComplete",function(sym,e){try{var stage=sym.getComposition().getStage();stage.getVariable("deferred")||stage.setVariable("deferred",[]);var deferred=stage.getVariable("deferred");deferred.push({when:"document.compositionReady",what:function(){var registerScrollTrigger=stage.getVariable("registerScrollTrigger");registerScrollTrigger({status:"inactive",sym:sym,type:"minY",min:400});}});}
catch(err){console.error(err.toString());}});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",11500,function(sym,e){sym.getComposition().getStage().getSymbol("sidebarResults").getSymbol("RfLogo").play();sym.getComposition().getStage().getVariable("config").reflow=true;});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_btnYes}","click",function(sym,e){sym.play("details");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_btnRfNo}","click",function(sym,e){sym.getComposition().getStage().getVariable("setScrollingArea")(3,true);});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",13000,function(sym,e){var stage=sym.getComposition().getStage(),setScrollingArea=stage.getVariable("setScrollingArea");setScrollingArea(3);});
//Edge binding end
})("scene_reflow");
//Edge symbol end:'scene_reflow'

//=========================================================

//Edge symbol: 'scene_animate_1'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",9750,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindSymbolAction(compId,symbolName,"creationComplete",function(sym,e){try{var stage=sym.getComposition().getStage();stage.getVariable("deferred")||stage.setVariable("deferred",[]);var deferred=stage.getVariable("deferred");deferred.push({when:"document.compositionReady",what:function(){var registerScrollTrigger=stage.getVariable("registerScrollTrigger");registerScrollTrigger({status:"inactive",sym:sym,type:"minY",min:400});}});}
catch(err){console.error(err.toString());}});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",11500,function(sym,e){sym.getComposition().getStage().getSymbol("sidebarResults").getSymbol("CoLogo").play();sym.getComposition().getStage().getVariable("config").code=true;});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_btnCoYes}","click",function(sym,e){sym.play("details");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_btnCoNo}","click",function(sym,e){sym.getComposition().getStage().getVariable("setScrollingArea")(4,true);});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",13000,function(sym,e){var stage=sym.getComposition().getStage(),setScrollingArea=stage.getVariable("setScrollingArea");setScrollingArea(4);});
//Edge binding end
})("scene_code");
//Edge symbol end:'scene_code'

//=========================================================

//Edge symbol: 'scene_code_1'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",9750,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindSymbolAction(compId,symbolName,"creationComplete",function(sym,e){try{var stage=sym.getComposition().getStage();stage.getVariable("deferred")||stage.setVariable("deferred",[]);var deferred=stage.getVariable("deferred");deferred.push({when:"document.compositionReady",what:function(){var registerScrollTrigger=stage.getVariable("registerScrollTrigger");registerScrollTrigger({status:"inactive",sym:sym,type:"minY",min:400});}});}
catch(err){console.error(err.toString());}});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",11500,function(sym,e){sym.getComposition().getStage().getSymbol("sidebarResults").getSymbol("InLogo").play();sym.getComposition().getStage().getVariable("config").inspect=true;});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_btnInYes}","click",function(sym,e){sym.play("details");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_btnInNo}","click",function(sym,e){sym.getComposition().getStage().getVariable("setScrollingArea")(5,true);});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",13000,function(sym,e){var stage=sym.getComposition().getStage(),setScrollingArea=stage.getVariable("setScrollingArea");setScrollingArea(5);});
//Edge binding end
})("scene_inspect");
//Edge symbol end:'scene_inspect'

//=========================================================

//Edge symbol: 'sidebarResults'
(function(symbolName){})("sidebarResults");
//Edge symbol end:'sidebarResults'

//=========================================================

//Edge symbol: 'AnLogo'
(function(symbolName){})("AnLogo");
//Edge symbol end:'AnLogo'

//=========================================================

//Edge symbol: 'RfLogo'
(function(symbolName){})("RfLogo");
//Edge symbol end:'RfLogo'

//=========================================================

//Edge symbol: 'CoLogo'
(function(symbolName){})("CoLogo");
//Edge symbol end:'CoLogo'

//=========================================================

//Edge symbol: 'InLogo'
(function(symbolName){})("InLogo");
//Edge symbol end:'InLogo'

//=========================================================

//Edge symbol: 'btnNope_1'
(function(symbolName){Symbol.bindSymbolAction(compId,symbolName,"creationComplete",function(sym,e){sym.$("hotspot").mouseenter(function(){sym.play();});sym.$("hotspot").mouseleave(function(){sym.playReverse();});});
//Edge binding end
})("btnRfNo");
//Edge symbol end:'btnRfNo'

//=========================================================

//Edge symbol: 'btnAbsolutely_1'
(function(symbolName){Symbol.bindSymbolAction(compId,symbolName,"creationComplete",function(sym,e){sym.$("hotspot").mouseenter(function(){sym.play();});sym.$("hotspot").mouseleave(function(){sym.playReverse();});});
//Edge binding end
})("btnRfYes");
//Edge symbol end:'btnRfYes'

//=========================================================

//Edge symbol: 'btnRfNo_1'
(function(symbolName){Symbol.bindSymbolAction(compId,symbolName,"creationComplete",function(sym,e){sym.$("hotspot").mouseenter(function(){sym.play();});sym.$("hotspot").mouseleave(function(){sym.playReverse();});});
//Edge binding end
})("btnCoNo");
//Edge symbol end:'btnCoNo'

//=========================================================

//Edge symbol: 'btnRfYes_1'
(function(symbolName){Symbol.bindSymbolAction(compId,symbolName,"creationComplete",function(sym,e){sym.$("hotspot").mouseenter(function(){sym.play();});sym.$("hotspot").mouseleave(function(){sym.playReverse();});});
//Edge binding end
})("btnCoYes");
//Edge symbol end:'btnCoYes'

//=========================================================

//Edge symbol: 'btnCoNo_1'
(function(symbolName){Symbol.bindSymbolAction(compId,symbolName,"creationComplete",function(sym,e){sym.$("hotspot").mouseenter(function(){sym.play();});sym.$("hotspot").mouseleave(function(){sym.playReverse();});});
//Edge binding end
})("btnInNo");
//Edge symbol end:'btnInNo'

//=========================================================

//Edge symbol: 'btnCoYes_1'
(function(symbolName){Symbol.bindSymbolAction(compId,symbolName,"creationComplete",function(sym,e){sym.$("hotspot").mouseenter(function(){sym.play();});sym.$("hotspot").mouseleave(function(){sym.playReverse();});});
//Edge binding end
})("btnInYes");
//Edge symbol end:'btnInYes'

//=========================================================

//Edge symbol: 'scrollDownIcon'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",2000,function(sym,e){sym.play(0);});
//Edge binding end
})("scrollDownIcon");
//Edge symbol end:'scrollDownIcon'

//=========================================================

//Edge symbol: 'introFade'
(function(symbolName){Symbol.bindSymbolAction(compId,symbolName,"creationComplete",function(sym,e){try{var stage=sym.getComposition().getStage();stage.getVariable("deferred")||stage.setVariable("deferred",[]);var deferred=stage.getVariable("deferred");deferred.push({when:"document.compositionReady",what:function(){var registerScrollTrigger=stage.getVariable("registerScrollTrigger");registerScrollTrigger({status:"inactive",sym:sym,type:"minY",min:600});}});}
catch(err){console.error(err.toString());}});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",500,function(sym,e){sym.getSymbolElement().height(1);});
//Edge binding end
})("introFade");
//Edge symbol end:'introFade'

//=========================================================

//Edge symbol: 'scene_intro_1'
(function(symbolName){Symbol.bindSymbolAction(compId,symbolName,"creationComplete",function(sym,e){try{var stage=sym.getComposition().getStage();stage.getVariable("deferred")||stage.setVariable("deferred",[]);var deferred=stage.getVariable("deferred");deferred.push({when:"document.compositionReady",what:function(){var registerScrollTrigger=stage.getVariable("registerScrollTrigger");registerScrollTrigger({status:"inactive",sym:sym,type:"minY",min:400});}});}
catch(err){console.error(err.toString());}});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",500,function(sym,e){if(sym.getComposition().getStage().getVariable("config").animate){sym.$("AnLogo").css("opacity",1);}
if(sym.getComposition().getStage().getVariable("config").reflow){sym.$("RfLogo").css("opacity",1);}
if(sym.getComposition().getStage().getVariable("config").code){sym.$("CoLogo").css("opacity",1);}
if(sym.getComposition().getStage().getVariable("config").inspect){sym.$("InLogo").css("opacity",1);}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_link}","click",function(sym,e){window.open("http://html.adobe.com/edge/inspect/","_blank");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_linkCopy}","click",function(sym,e){window.open("http://html.adobe.com/edge/reflow/","_blank");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_linkCopy2}","click",function(sym,e){window.open("http://html.adobe.com/edge/code/","_blank");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_linkCopy3}","click",function(sym,e){window.open("http://html.adobe.com/edge/inspect/","_blank");});
//Edge binding end
})("scene_results");
//Edge symbol end:'scene_results'
})(jQuery,AdobeEdge,"EDGE-709357467");