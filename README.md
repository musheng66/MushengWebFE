# MushengWebFE
一个基于node.js的Express+jade开发的前端工具文档

## 说明：
* 未上传node_modules文件夹，此文件夹为Express生成，用于存放项目依赖的各种类库。
* 上传了node_modules文件夹的压缩包，解压缩后放在项目中即可。
* 项目中自行添加的类库为：mysql（数据库），multiparty（文件上传）。
  * `npm install multiparty`
  * `npm install mysql`

## 使用Express创建项目：
  * [点击查看原网页](http://www.cnblogs.com/Darren_code/p/express4.html "创建Express项目")
  * 以命令行方式进入到要创建项目的文件夹，执行 `express 项目名称` 命令，就会创建一个Express项目
  * 输入 `cd myapp && npm install` 安装必要的依赖库
  * 输入 `setdebug=项目名称 & npm start` 运行项目

## 使用Github托管项目：
  * [点击查看原网页](http://hellokugo.blog.51cto.com/9827529/1615715 "使用Github托管项目")
  * 使用方法： 

### git——添加新项目
登录GitHub后，你可以在右边靠中那里找到一个按钮“New Repository”，点击过后，填入项目名称、说明和网址过后就可以创建了，然后会出现一个提示页面，记下类似git@github.com:XXX/XXX.git的地址，这个就是你这个项目的地址了。
2.配置Git以及上传代码

安装Git成功后，如果是Windows下，选择Git Bash，在命令行中完成一切，可能开始有点麻烦，不过就那几条命令行，用几次就记住啦。首先初始设置Git：

`git config --global user.name "Your Real Name"`
`git config --global user.email you@email.address`
 
然后开始进行最麻烦的一步了，你需要上传文件到GitHub的Git系统上，得需要一个SSH密匙来认证，下面就开始生成密钥和提交密钥。打开Git Bash,创建SSH key:

`ssh-keygen -C 'your@email.address' -t rsa`
 
然后要你输入SSH密匙的存放位置，可以不管，直接回车使用默认路径。再输入你想要的密码，SSH key就生成了。现在你需要将这个Key提交到GitHub，首先打开Key保存的位置，里面会有三个文件，找到id_rsa.pub，用文本编辑器打开，复制里面的全部字符。到GitHub，在右上方工具栏里找到Account Settings。在这个页面上有一个SSH Public Keys标签，选择Add another public key。Title可以随便填一个，Key就粘贴刚才的字符，提交。

完成这些工作后，就可以上传自己的代码了。找到自己要分享上传的代码文件夹，右击选择Git Bash，或者在Git Bash中进入这个文件夹。建立一个仓库：

`git init`
 
选择要添加进仓库的文件：

`git add .`
 
一般如果你想分享这个文件夹里的所有代码，就在 add后面加“.”，上面的例子就是这样，如果传指定的，只需要把“.”改为文件名即可，现在只是选择了要加入仓库的文件，下面才是添加进入仓库：

`git commit -m 'Test'`
 
-m后面跟一个参数，表示说明，将代码提交到GitHub后，将会在代码文件信息上显示这个说明，如下图标记的地方。

搞了这么久，现在才开始把本地仓库上传到GitHub了，下面两行命令搞定问题：

首先需要pull下代码，才能push上传成功

`（git pull origin master）`

继续下面的操作

1. `git remote add origin git@github.com:XXX/XXX.git`
2. `git pull origin master`
3. `git push -u origin master`
 
这个git@github.com:XXX/XXX.git就是上面创建项目是生成的地址。现在打开你的项目网址，你就可以发现你的代码已经展示出来了。如果你要更新代码的话，就重复上面的吧。
如果提交了敏感信息，比如代码中设置的自己的密码什么的忘删除就上传上去了怎么办？重新修改过后上传依然有历史记录，而使用Git删除历史记录貌似很麻烦，于是就采用删除项目吧，删除了再重新上传。删除项目需要在GitHub网站上右上方找到admin按钮，进去后右边最下面有个删除的按钮，这样就可以删除了。

### git——管理已有项目(进入文件目录，调出git bush命令行窗口)
1. `git pull origin master`
2. `git add 更改的文件或目录`
3. `git commit -m '说明文字'`
4. `git push -u origin master`
