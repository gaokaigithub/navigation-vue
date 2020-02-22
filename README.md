这是我很久之前做的一个项目的更新版，可以 [点击这里在线预览](https://hais-teatime.com/navigation-vue/) 。

目前维生素导航主要分为两个部分：**搜索框** 和 **网页导航**。

在上方的搜索框中输入文字可以使用对应的搜索引擎进行搜索，目前内置三款搜索引擎：Google、百度、Bing，默认为 Google。

点击下方的网页收藏可以进入到对应的页面，目前已经内置了一些默认的页面。

鼠标浮动到图标上会出现删除按钮，点击可以将网页删除；移动设备长按会弹出删除框，点击中间的红色小叉叉也可以删除网页。

点击 **'+'** 会弹出新增网页的对话框，可以输入网页的名称和 URL；若没有输入名称，则将默认使用域名作为名称。然后会自动请求图标，若图标请求失败，将会使用名称的第一个字符作为网页的图标。

网站的信息是存储在 LocalStorage 中的，所以清除历史记录的操作会清空之前添加的网站。

在这个项目中也遇到了一些麻烦，可以点击 [这篇博客](https://hais-teatime.com/post/2020-01-16-navigation-vue/) 看看我的记录。