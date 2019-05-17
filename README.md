

**useEffect && useLayoutEffect调用顺序图解**

useLayoutEffect与useEffect相同，但在所有DOM突变后， 它会同步触发，使用它从DOM读取布局并同步重新渲染。在浏览器有机绘制paint之前，useLayoutEffect内部安排的更新将同步刷新

￼![image](https://user-images.githubusercontent.com/12481194/57907931-5c06ba00-78b1-11e9-8c49-34e7add824ed.png)