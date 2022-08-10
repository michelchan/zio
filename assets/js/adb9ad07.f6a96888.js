"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[9138],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>k});var a=t(67294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var s=a.createContext({}),u=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},p=function(e){var n=u(e.components);return a.createElement(s.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,l=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=u(t),k=l,d=c["".concat(s,".").concat(k)]||c[k]||m[k]||i;return t?a.createElement(d,r(r({ref:n},p),{},{components:t})):a.createElement(d,r({ref:n},p))}));function k(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var i=t.length,r=new Array(i);r[0]=c;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:l,r[1]=o;for(var u=2;u<i;u++)r[u]=t[u];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},95098:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>r,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var a=t(87462),l=(t(67294),t(3905));const i={id:"zsink",title:"ZSink"},r=void 0,o={unversionedId:"reference/stream/zsink",id:"reference/stream/zsink",title:"ZSink",description:"Introduction",source:"@site/docs/reference/stream/zsink.md",sourceDirName:"reference/stream",slug:"/reference/stream/zsink",permalink:"/reference/stream/zsink",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/reference/stream/zsink.md",tags:[],version:"current",frontMatter:{id:"zsink",title:"ZSink"},sidebar:"reference-sidebar",previous:{title:"ZPipeline",permalink:"/reference/stream/zpipeline"},next:{title:"Sink",permalink:"/reference/stream/sink"}},s={},u=[{value:"Introduction",id:"introduction",level:2},{value:"Creating sinks",id:"creating-sinks",level:2},{value:"Common Constructors",id:"common-constructors",level:3},{value:"From Success and Failure",id:"from-success-and-failure",level:3},{value:"Collecting",id:"collecting",level:3},{value:"Folding",id:"folding",level:3},{value:"From ZIO",id:"from-zio",level:3},{value:"From File",id:"from-file",level:3},{value:"From OutputStream",id:"from-outputstream",level:3},{value:"From Queue",id:"from-queue",level:3},{value:"From Hub",id:"from-hub",level:3},{value:"Operations",id:"operations",level:2},{value:"contramap",id:"contramap",level:3},{value:"dimap",id:"dimap",level:3},{value:"Filtering",id:"filtering",level:3},{value:"Concurrency and Parallelism",id:"concurrency-and-parallelism",level:2},{value:"Parallel Zipping",id:"parallel-zipping",level:3},{value:"Racing",id:"racing",level:3},{value:"Leftovers",id:"leftovers",level:2},{value:"Collecting Leftovers",id:"collecting-leftovers",level:3},{value:"Ignoring Leftovers",id:"ignoring-leftovers",level:3}],p={toc:u};function m(e){let{components:n,...t}=e;return(0,l.kt)("wrapper",(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"introduction"},"Introduction"),(0,l.kt)("p",null,"A ",(0,l.kt)("inlineCode",{parentName:"p"},"ZSink[R, E, I, L, Z]")," is used to consume elements produced by a ",(0,l.kt)("inlineCode",{parentName:"p"},"ZStream"),". You can think of a sink as a function that will consume a variable amount of ",(0,l.kt)("inlineCode",{parentName:"p"},"I")," elements (could be 0, 1, or many!), might fail with an error of type ",(0,l.kt)("inlineCode",{parentName:"p"},"E"),", and will eventually yield a value of type ",(0,l.kt)("inlineCode",{parentName:"p"},"Z")," together with a remainder of type ",(0,l.kt)("inlineCode",{parentName:"p"},"L")," as leftover."),(0,l.kt)("p",null,"To consume a stream using ",(0,l.kt)("inlineCode",{parentName:"p"},"ZSink")," we can pass ",(0,l.kt)("inlineCode",{parentName:"p"},"ZSink")," to the ",(0,l.kt)("inlineCode",{parentName:"p"},"ZStream#run")," function:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-scala"},"import zio._\nimport zio.stream._\n\nval stream = ZStream.fromIterable(1 to 1000)\nval sink   = ZSink.sum[Int]\nval sum    = stream.run(sink)\n")),(0,l.kt)("h2",{id:"creating-sinks"},"Creating sinks"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"zio.stream")," provides numerous kinds of sinks to use."),(0,l.kt)("h3",{id:"common-constructors"},"Common Constructors"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"ZSink.head")," \u2014 It creates a sink containing the first element, returns ",(0,l.kt)("inlineCode",{parentName:"p"},"None")," for empty streams:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-scala"},"val sink: ZSink[Any, Nothing, Int, Int, Option[Int]] = ZSink.head[Int]\nval head: ZIO[Any, Nothing, Option[Int]]             = ZStream(1, 2, 3, 4).run(sink)\n// Result: Some(1)\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"ZSink.last")," \u2014 It consumes all elements of a stream and returns the last element of the stream:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-scala"},"val sink: ZSink[Any, Nothing, Int, Int, Option[Int]] = ZSink.last[Int]\nval last: ZIO[Any, Nothing, Option[Int]]                 = ZStream(1, 2, 3, 4).run(sink)\n// Result: Some(4)\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"ZSink.count")," \u2014 A sink that consumes all elements of the stream and counts the number of elements fed to it:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-scala"},"val sink : ZSink[Any, Nothing, Int, Nothing, Int] = ZSink.sum[Int]\nval count: ZIO[Any, Nothing, Int]                 = ZStream(1, 2, 3, 4, 5).run(sink)\n// Result: 5\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"ZSink.sum")," \u2014 A sink that consumes all elements of the stream and sums incoming numeric values:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-scala"},"val sink : ZSink[Any, Nothing, Int, Nothing, Int] = ZSink.sum[Int]\nval sum: ZIO[Any, Nothing, Int]                 = ZStream(1, 2, 3, 4, 5).run(sink)\n// Result: 15\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"ZSink.take")," \u2014 A sink that takes the specified number of values and result in a ",(0,l.kt)("inlineCode",{parentName:"p"},"Chunk")," data type:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-scala"},"val sink  : ZSink[Any, Nothing, Int, Int, Chunk[Int]] = ZSink.take[Int](3)\nval stream: ZIO[Any, Nothing, Chunk[Int]]             = ZStream(1, 2, 3, 4, 5).run(sink)\n// Result: Chunk(1, 2, 3)\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"ZSink.drain")," \u2014 A sink that ignores its inputs:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-scala"},"val drain: ZSink[Any, Nothing, Any, Nothing, Unit] = ZSink.drain\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"ZSink.timed")," \u2014 A sink that executes the stream and times its execution:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-scala"},"val timed: ZSink[Any, Nothing, Any, Nothing, Duration] = ZSink.timed\nval stream: ZIO[Any, Nothing, Long] =\n  ZStream(1, 2, 3, 4, 5)\n    .schedule(Schedule.fixed(2.seconds))\n    .run(timed)\n    .map(_.getSeconds)\n// Result: 10\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"ZSink.foreach")," \u2014 A sink that executes the provided effectful function for every element fed to it:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-scala"},"val printer: ZSink[Any, IOException, Int, Int, Unit] =\n  ZSink.foreach((i: Int) => printLine(i))\nval stream : ZIO[Any, IOException, Unit]             =\n  ZStream(1, 2, 3, 4, 5).run(printer)\n")),(0,l.kt)("h3",{id:"from-success-and-failure"},"From Success and Failure"),(0,l.kt)("p",null,"Similar to the ",(0,l.kt)("inlineCode",{parentName:"p"},"ZStream")," data type, we can create a ",(0,l.kt)("inlineCode",{parentName:"p"},"ZSink")," using ",(0,l.kt)("inlineCode",{parentName:"p"},"fail")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"succeed")," methods."),(0,l.kt)("p",null,"A sink that doesn't consume any element from its upstream and successes with a value of ",(0,l.kt)("inlineCode",{parentName:"p"},"Int")," type:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-scala"},"val succeed: ZSink[Any, Any, Any, Nothing, Int] = ZSink.succeed(5)\n")),(0,l.kt)("p",null,"A sink that doesn't consume any element from its upstream and intentionally fails with a message of ",(0,l.kt)("inlineCode",{parentName:"p"},"String")," type:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-scala"},'val failed : ZSink[Any, String, Any, Nothing, Nothing] = ZSink.fail("fail!")\n')),(0,l.kt)("h3",{id:"collecting"},"Collecting"),(0,l.kt)("p",null,"To create a sink that collects all elements of a stream into a ",(0,l.kt)("inlineCode",{parentName:"p"},"Chunk[A]"),", we can use ",(0,l.kt)("inlineCode",{parentName:"p"},"ZSink.collectAll"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-scala"},"val stream    : UStream[Int]    = ZStream(1, 2, 3, 4, 5)\nval collection: UIO[Chunk[Int]] = stream.run(ZSink.collectAll[Int])\n// Output: Chunk(1, 2, 3, 4, 5)\n")),(0,l.kt)("p",null,"We can collect all elements into a ",(0,l.kt)("inlineCode",{parentName:"p"},"Set"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-scala"},"val collectAllToSet: ZSink[Any, Nothing, Int, Nothing, Set[Int]] = ZSink.collectAllToSet[Int]\nval stream: ZIO[Any, Nothing, Set[Int]] = ZStream(1, 3, 2, 3, 1, 5, 1).run(collectAllToSet)\n// Output: Set(1, 3, 2, 5)\n")),(0,l.kt)("p",null,"Or we can collect and merge them into a ",(0,l.kt)("inlineCode",{parentName:"p"},"Map[K, A]")," using a merge function. In the following example, we use ",(0,l.kt)("inlineCode",{parentName:"p"},"(_:Int) % 3")," to determine map keys and, we provide ",(0,l.kt)("inlineCode",{parentName:"p"},"_ + _")," function to merge multiple elements with the same key:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-scala"},"val collectAllToMap: ZSink[Any, Nothing, Int, Nothing, Map[Int, Int]] = ZSink.collectAllToMap((_: Int) % 3)(_ + _)\nval stream: ZIO[Any, Nothing, Map[Int, Int]] = ZStream(1, 3, 2, 3, 1, 5, 1).run(collectAllToMap)\n// Output: Map(1 -> 3, 0 -> 6, 2 -> 7)\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"ZSink.collectAllN")," \u2014 Collects incoming values into chunk of maximum size of ",(0,l.kt)("inlineCode",{parentName:"p"},"n"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-scala"},"ZStream(1, 2, 3, 4, 5).run(\n  ZSink.collectAllN(3)\n)\n// Output: Chunk(1,2,3), Chunk(4,5)\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"ZSink.collectAllWhile")," \u2014 Accumulates incoming elements into a chunk as long as they verify the given predicate:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-scala"},"ZStream(1, 2, 0, 4, 0, 6, 7).run(\n  ZSink.collectAllWhile(_ != 0)\n)\n// Output: Chunk(1,2), Chunk(4), Chunk(6,7)\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"ZSink.collectAllToMapN")," \u2014 Creates a sink accumulating incoming values into maps of up to ",(0,l.kt)("inlineCode",{parentName:"p"},"n")," keys. Elements are mapped to keys using the function ",(0,l.kt)("inlineCode",{parentName:"p"},"key"),"; elements mapped to the same key will be merged with the function ",(0,l.kt)("inlineCode",{parentName:"p"},"f"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-scala"},"object ZSink {\n  def collectAllToMapN[Err, In, K](\n    n: Long\n  )(key: In => K)(f: (In, In) => In): ZSink[Any, Err, In, Err, In, Map[K, In]]\n}\n")),(0,l.kt)("p",null,"Let's do an example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-scala"},"ZStream(1, 2, 0, 4, 5).run(\n  ZSink.collectAllToMapN[Nothing, Int, Int](10)(_ % 3)(_ + _)\n)\n// Output: Map(1 -> 5, 2 -> 7, 0 -> 0)\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"ZSink.collectAllToSetN")," \u2014 Creates a sink accumulating incoming values into sets of maximum size ",(0,l.kt)("inlineCode",{parentName:"p"},"n"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-scala"},"ZStream(1, 2, 1, 2, 1, 3, 0, 5, 0, 2).run(\n  ZSink.collectAllToSetN(3)\n)\n// Output: Set(1,2,3), Set(0,5,2), Set(1)\n")),(0,l.kt)("h3",{id:"folding"},"Folding"),(0,l.kt)("p",null,"Basic fold accumulation of received elements:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-scala"},"ZSink.foldLeft[Int, Int](0)(_ + _)\n")),(0,l.kt)("p",null,"A fold with short-circuiting has a termination predicate that determines the end of the folding process:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-scala"},"ZStream.iterate(0)(_ + 1).run(\n  ZSink.fold(0)(sum => sum <= 10)((acc, n: Int) => acc + n)\n)\n// Output: 15\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"ZSink.foldWeighted")," \u2014 Creates a sink that folds incoming elements until reaches the ",(0,l.kt)("inlineCode",{parentName:"p"},"max")," worth of elements determined by the ",(0,l.kt)("inlineCode",{parentName:"p"},"costFn"),", then the pipeline emits the computed value and restarts the folding process:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-scala"},"object ZSink {\n  def foldWeighted[Err, In, S](z: S)(costFn: (S, In) => Long, max: Long)(\n    f: (S, In) => S\n  ): ZSink[Any, Err, In, Err, In, S] = ???\n}\n")),(0,l.kt)("p",null,"In the following example, each time we consume a new element we return one as the weight of that element using cost function. After three times, the sum of the weights reaches to the ",(0,l.kt)("inlineCode",{parentName:"p"},"max")," number, and the folding process restarted. So we expect this pipeline to group each three elements in one ",(0,l.kt)("inlineCode",{parentName:"p"},"Chunk"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-scala"},"ZStream(3, 2, 4, 1, 5, 6, 2, 1, 3, 5, 6)\n  .transduce(\n    ZSink\n      .foldWeighted(Chunk[Int]())(\n        (_, _: Int) => 1,\n        3\n      ) { (acc, el) =>\n        acc ++ Chunk(el)\n      }\n  )\n// Output: Chunk(3,2,4),Chunk(1,5,6),Chunk(2,1,3),Chunk(5,6)\n")),(0,l.kt)("p",null,"Another example is when we want to group element which sum of them equal or less than a specific number:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-scala"},"ZStream(1, 2, 2, 4, 2, 1, 1, 1, 0, 2, 1, 2)\n  .transduce(\n    ZSink\n      .foldWeighted(Chunk[Int]())(\n        (_, i: Int) => i.toLong,\n        5\n      ) { (acc, el) =>\n        acc ++ Chunk(el)\n      }\n  )\n// Output: Chunk(1,2,2),Chunk(4),Chunk(2,1,1,1,0),Chunk(2,1,2)\n")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},"Note"),":"),(0,l.kt)("p",{parentName:"blockquote"},"The ",(0,l.kt)("inlineCode",{parentName:"p"},"ZSink.foldWeighted")," cannot decompose elements whose weight is more than the ",(0,l.kt)("inlineCode",{parentName:"p"},"max")," number. So elements that have an individual cost larger than ",(0,l.kt)("inlineCode",{parentName:"p"},"max")," will force the pipeline to cross the ",(0,l.kt)("inlineCode",{parentName:"p"},"max")," cost. In the last example, if the source stream was ",(0,l.kt)("inlineCode",{parentName:"p"},"ZStream(1, 2, 2, 4, 2, 1, 6, 1, 0, 2, 1, 2)")," the output would be ",(0,l.kt)("inlineCode",{parentName:"p"},"Chunk(1,2,2),Chunk(4),Chunk(2,1),Chunk(6),Chunk(1,0,2,1),Chunk(2)"),". As we see, the ",(0,l.kt)("inlineCode",{parentName:"p"},"6")," element crossed the ",(0,l.kt)("inlineCode",{parentName:"p"},"max")," cost."),(0,l.kt)("p",{parentName:"blockquote"},"To decompose these elements, we should use ",(0,l.kt)("inlineCode",{parentName:"p"},"ZSink.foldWeightedDecompose")," function.")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"ZSink.foldWeightedDecompose")," \u2014 As we saw in the previous section, we need a way to decompose elements \u2014 whose cause the output aggregate cross the ",(0,l.kt)("inlineCode",{parentName:"p"},"max")," \u2014 into smaller elements. This version of fold takes ",(0,l.kt)("inlineCode",{parentName:"p"},"decompose")," function and enables us to do that:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-scala"},"object ZSink {\n  def foldWeightedDecompose[Err, In, S](\n     z: S\n   )(costFn: (S, In) => Long, max: Long, decompose: In => Chunk[In])(\n     f: (S, In) => S\n   ): ZSink[Any, Err, In, Err, In, S] = ???\n}\n")),(0,l.kt)("p",null,"In the following example, we are break down elements that are bigger than 5, using ",(0,l.kt)("inlineCode",{parentName:"p"},"decompose")," function:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-scala"},"ZStream(1, 2, 2, 2, 1, 6, 1, 7, 2, 1, 2)\n  .transduce(\n    ZSink\n      .foldWeightedDecompose(Chunk[Int]())(\n        (_, i: Int) => i.toLong,\n        5,\n        (i: Int) =>\n          if (i > 5) Chunk(i - 1, 1) else Chunk(i)\n      )((acc, el) => acc ++ Chunk.succeed(el))\n  )\n// Ouput: Chunk(1,2,2),Chunk(2,1),Chunk(5),Chunk(1,1),Chunk(5),Chunk(1,1,2,1),Chunk(2)\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"ZSink.foldUntil")," \u2014 Creates a sink that folds incoming element until specific ",(0,l.kt)("inlineCode",{parentName:"p"},"max")," elements have been folded:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-scala"},"ZStream(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)\n  .run(ZSink.foldUntil(0, 3)(_ + _))\n// Output: 6, 15, 24, 10\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"ZSink.foldLeft")," \u2014 This sink will fold the inputs until the stream ends, resulting in one element:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-scala"},"val stream: ZIO[Any, Nothing, Int] = \n  ZStream(1, 2, 3, 4).run(ZSink.foldLeft[Int, Int](0)(_ + _))\n// Output: 10\n")),(0,l.kt)("h3",{id:"from-zio"},"From ZIO"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"ZSink.fromZIO")," creates a single-value sink produced from a ZIO workflow:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-scala"},"val sink = ZSink.fromZIO(ZIO.succeed(1))\n")),(0,l.kt)("h3",{id:"from-file"},"From File"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"ZSink.fromPath")," creates a file sink that consumes byte chunks and writes them to the specified file:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-scala"},'def fileSink(path: Path): ZSink[Any, Throwable, String, Byte, Long] =\n  ZSink\n    .fromPath(path)\n    .contramapChunks[String](_.flatMap(_.getBytes))\n\nval result = ZStream("Hello", "ZIO", "World!")\n  .intersperse("\\n")\n  .run(fileSink(Paths.get("file.txt")))\n')),(0,l.kt)("h3",{id:"from-outputstream"},"From OutputStream"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"ZSink.fromOutputStream")," creates a sink that consumes byte chunks and write them to the ",(0,l.kt)("inlineCode",{parentName:"p"},"OutputStream"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-scala"},'ZStream("Application", "Error", "Logs")\n  .intersperse("\\n")\n  .run(\n    ZSink\n      .fromOutputStream(java.lang.System.err)\n      .contramapChunks[String](_.flatMap(_.getBytes))\n  )\n')),(0,l.kt)("h3",{id:"from-queue"},"From Queue"),(0,l.kt)("p",null,"A queue has a finite or infinite buffer size, so they are useful in situations where we need to consume streams as fast as we can, and then do some batching operations on consumed messages. By using ",(0,l.kt)("inlineCode",{parentName:"p"},"ZSink.fromQueue")," we can create a sink that is backed by a queue; it enqueues each element into the specified queue:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-scala"},"val myApp: IO[IOException, Unit] =\n  for {\n    queue    <- Queue.bounded[Int](32)\n    producer <- ZStream\n      .iterate(1)(_ + 1)\n      .schedule(Schedule.fixed(200.millis))\n      .run(ZSink.fromQueue(queue))\n      .fork\n    consumer <- queue.take.flatMap(printLine(_)).forever\n    _        <- producer.zip(consumer).join\n  } yield ()\n")),(0,l.kt)("h3",{id:"from-hub"},"From Hub"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Hub")," is an asynchronous data type in which publisher can publish their messages to that and subscribers can subscribe to take messages from the ",(0,l.kt)("inlineCode",{parentName:"p"},"Hub"),". The ",(0,l.kt)("inlineCode",{parentName:"p"},"ZSink.fromHub")," takes a ",(0,l.kt)("inlineCode",{parentName:"p"},"Hub")," and returns a ",(0,l.kt)("inlineCode",{parentName:"p"},"ZSink")," which publishes each element to that ",(0,l.kt)("inlineCode",{parentName:"p"},"Hub"),"."),(0,l.kt)("p",null,"In the following example, the ",(0,l.kt)("inlineCode",{parentName:"p"},"sink")," consumes elements of the ",(0,l.kt)("inlineCode",{parentName:"p"},"producer")," stream and publishes them to the ",(0,l.kt)("inlineCode",{parentName:"p"},"hub"),". We have two consumers that are subscribed to that hub and they are taking its elements forever:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-scala"},'val myApp: ZIO[Any, IOException, Unit] =\n  for {\n    promise <- Promise.make[Nothing, Unit]\n    hub <- Hub.bounded[Int](1)\n    sink <- ZIO.succeed(ZSink.fromHub(hub))\n    producer <- ZStream\n      .iterate(0)(_ + 1)\n      .schedule(Schedule.fixed(1.seconds))\n      .run(sink)\n      .fork\n    consumers <- ZIO.scoped {\n      hub.subscribe.zip(hub.subscribe).flatMap { case (left, right) =>\n        for {\n          _ <- promise.succeed(())\n          f1 <- left.take.flatMap(e => printLine(s"Left Queue: $e")).forever.fork\n          f2 <- right.take.flatMap(e => printLine(s"Right Queue: $e")).forever.fork\n          _ <- f1.zip(f2).join\n        } yield ()\n      }\n    }.fork\n    _ <- promise.await\n    _ <- producer.zip(consumers).join\n  } yield ()\n')),(0,l.kt)("h2",{id:"operations"},"Operations"),(0,l.kt)("p",null,"Having created the sink, we can transform it with provided operations."),(0,l.kt)("h3",{id:"contramap"},"contramap"),(0,l.kt)("p",null,"Contramap is a simple combinator to change the domain of an existing function. While ",(0,l.kt)("em",{parentName:"p"},"map")," changes the co-domain of a function, the ",(0,l.kt)("em",{parentName:"p"},"contramap")," changes the domain of a function. So the ",(0,l.kt)("em",{parentName:"p"},"contramap")," takes a function and maps over its input."),(0,l.kt)("p",null,"This is useful when we have a fixed output, and our existing function cannot consume those outputs. So we can use ",(0,l.kt)("em",{parentName:"p"},"contramap")," to create a new function that can consume that fixed output. Assume we have a ",(0,l.kt)("inlineCode",{parentName:"p"},"ZSink.sum")," that sums incoming numeric values, but we have a ",(0,l.kt)("inlineCode",{parentName:"p"},"ZStream")," of ",(0,l.kt)("inlineCode",{parentName:"p"},"String")," values. We can convert the ",(0,l.kt)("inlineCode",{parentName:"p"},"ZSink.sum")," to a sink that can consume ",(0,l.kt)("inlineCode",{parentName:"p"},"String")," values;"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-scala"},'val numericSum: ZSink[Any, Nothing, Int, Nothing, Int]    = \n  ZSink.sum[Int]\nval stringSum : ZSink[Any, Nothing, String, Nothing, Int] = \n  numericSum.contramap((x: String) => x.toInt)\n\nval sum: ZIO[Any, Nothing, Int] =\n  ZStream("1", "2", "3", "4", "5").run(stringSum)\n// Output: 15\n')),(0,l.kt)("h3",{id:"dimap"},"dimap"),(0,l.kt)("p",null,"A ",(0,l.kt)("inlineCode",{parentName:"p"},"dimap")," is an extended ",(0,l.kt)("inlineCode",{parentName:"p"},"contramap")," that additionally transforms sink's output:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-scala"},'// Convert its input to integers, do the computation and then convert them back to a string\nval sumSink: ZSink[Any, Nothing, String, Nothing, String] =\n  numericSum.dimap[String, String](_.toInt, _.toString)\n  \nval sum: ZIO[Any, Nothing, String] =\n  ZStream("1", "2", "3", "4", "5").run(sumSink)\n// Output: 15\n')),(0,l.kt)("h3",{id:"filtering"},"Filtering"),(0,l.kt)("p",null,"Sinks have ",(0,l.kt)("inlineCode",{parentName:"p"},"ZSink#filterInput")," for filtering incoming elements:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-scala"},"ZStream(1, -2, 0, 1, 3, -3, 4, 2, 0, 1, -3, 1, 1, 6)\n  .transduce(\n    ZSink\n      .collectAllN[Int](3)\n      .filterInput[Int](_ > 0)\n  )\n// Output: Chunk(Chunk(1,1,3),Chunk(4,2,1),Chunk(1,1,6),Chunk())\n")),(0,l.kt)("h2",{id:"concurrency-and-parallelism"},"Concurrency and Parallelism"),(0,l.kt)("h3",{id:"parallel-zipping"},"Parallel Zipping"),(0,l.kt)("p",null,"Like ",(0,l.kt)("inlineCode",{parentName:"p"},"ZStream"),", two ",(0,l.kt)("inlineCode",{parentName:"p"},"ZSink")," can be zipped together. Both of them will be run in parallel, and their results will be combined in a tuple:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-scala"},"val kafkaSink: ZSink[Any, Throwable, Record, Record, Unit] =\n  ZSink.foreach[Any, Throwable, Record](record => ZIO.attempt(???))\n\nval pulsarSink: ZSink[Any, Throwable, Record, Record, Unit] =\n  ZSink.foreach[Any, Throwable, Record](record => ZIO.attempt(???))\n\nval stream: ZSink[Any, Throwable, Record, Record, Unit] =\n  kafkaSink zipPar pulsarSink \n")),(0,l.kt)("h3",{id:"racing"},"Racing"),(0,l.kt)("p",null,"We are able to ",(0,l.kt)("inlineCode",{parentName:"p"},"race")," multiple sinks, they will run in parallel, and the one that wins will provide the result of our program:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-scala"},"val stream: ZSink[Any, Throwable, Record, Record, Unit] =\n  kafkaSink race pulsarSink \n")),(0,l.kt)("p",null,"To determine which one succeeded, we should use the ",(0,l.kt)("inlineCode",{parentName:"p"},"ZSink#raceBoth")," combinator, it returns an ",(0,l.kt)("inlineCode",{parentName:"p"},"Either")," result."),(0,l.kt)("h2",{id:"leftovers"},"Leftovers"),(0,l.kt)("h3",{id:"collecting-leftovers"},"Collecting Leftovers"),(0,l.kt)("p",null,"A sink consumes a variable amount of ",(0,l.kt)("inlineCode",{parentName:"p"},"I")," elements (zero or more) from the upstream. If the upstream is finite, we can collect leftover values by calling ",(0,l.kt)("inlineCode",{parentName:"p"},"ZSink#collectLeftover"),". It returns a tuple that contains the result of the previous sink and its leftovers:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-scala"},"val s1: ZIO[Any, Nothing, (Chunk[Int], Chunk[Int])] =\n  ZStream(1, 2, 3, 4, 5).run(\n    ZSink.take(3).collectLeftover\n  )\n// Output: (Chunk(1, 2, 3), Chunk(4, 5))\n\n\nval s2: ZIO[Any, Nothing, (Option[Int], Chunk[Int])] =\n  ZStream(1, 2, 3, 4, 5).run(\n    ZSink.head[Int].collectLeftover\n  )\n// Output: (Some(1), Chunk(2, 3, 4, 5))\n")),(0,l.kt)("h3",{id:"ignoring-leftovers"},"Ignoring Leftovers"),(0,l.kt)("p",null,"If we don't need leftovers, we can drop them by using ",(0,l.kt)("inlineCode",{parentName:"p"},"ZSink#ignoreLeftover"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-scala"},"ZSink.take[Int](3).ignoreLeftover\n")))}m.isMDXComponent=!0}}]);