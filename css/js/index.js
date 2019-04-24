var cArr=[], $li=$(".auto_list li"),ln=$li.length;
for(i=0;i<ln;i++){
    cArr.push('p1');
}
cArr[0]='p4';
cArr[1]='p3';
cArr[2]='p2';
$li.each(function(i,e){
    $(e).removeClass().addClass(cArr[i]);
})
$(".auto_list .next").click(
    function(){
        nextimg();
    }
)
$(".auto_list .prev").click(
    function(){
        previmg();
    }
)
function previmg(){
    cArr.unshift(cArr[ln-1]);
    cArr.pop();
    //i是元素的索引，从0开始
    //e为当前处理的元素
    //each循环，当前处理的元素移除所有的class，然后添加数组索引i的class
    $li.each(function(i,e){
        $(e).removeClass().addClass(cArr[i]);
    })
    // show();
}
function nextimg(){
    cArr.push(cArr[0]);
    cArr.shift();
    $li.each(function(i,e){
        $(e).removeClass().addClass(cArr[i]);
    })
    // show();
}