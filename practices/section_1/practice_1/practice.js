//alert("before function");
function collect_same_elements(collection_a, collection_b)
{
   // alert("int function");
   // alert("a:" + collection_a);
    //AB中相同的元素
    //在A中找B
    var i = 0;
    var j = 0;
    var arr_fir = [];
    for(i = 0; i < collection_a.length; ++i)
    {
        for(j = 0; j < collection_b.length; ++j)
        {
            if(collection_a[i] == collection_b[j])
                {
                    arr_fir.push(collection_a[i]);
                }
        }
    }

 //   alert("arr_fir:" + arr_fir);
    //a,e,f,d
	return arr_fir;
 //   alert("arr_fin:" + arr_fin)
    //在这里写入代码
}
//alert("after function");

//var A = ["a","e","h","t","f","c","g","b","d"];
//var B = ["a","d","e","f"];
//collect_same_elements(A,B);

//["a","e","f","d"]
module.exports = collect_same_elements;
