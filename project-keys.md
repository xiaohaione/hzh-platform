一.项目说明
1.build/ webpack 相关代码
2.config/ 本地服务配置
3. .eslintgnore exlint排除文件
4. .eslinttrc estlint配置文件

二.登录以及校验
(1).
  methods: {
    //登录请求
    handleLongin() {
      apiLogin
        .login(this.fromdata.username, this.fromdata.password)
        .then(res => {
          console.log(res);
          const { data, success, code, message } = res.data;
          // 登录成功
          // 1.跳转到home首页
          console.log("--->" + code);
          if (code === 200) {
            this.$router.push({ name: "home" });
            this.$message.success("登录成功");
          } else {
            this.$message.error(message);
          }

          // 登录不成功
          // 1.提示错误信息
        });
    }
  }
  (2).异步操作登录async , await
      async handleLongin() {
      const res = await apiLogin.login(
        this.fromdata.username,
        this.fromdata.password
      );

      console.log(res);
      const { data, success, code, message } = res.data;
      // 登录成功
      // 1.跳转到home首页
      console.log("code:" + code);
      if (code === 200) {
        this.$router.push({ name: "home" });
        this.$message.success("登录成功");
      } else {
        this.$message.error(message);
      }

      // 登录不成功
      // 1.提示错误信息
    }

    #2. 登录成功时,保存token
    (1).如果直接url访问的->url访问home组件
    
    #3.项目-首页-布局容器
    // 引入布局容器
    #4.项目-首页-样式-调整
    (1).layout布局
    > 行el-row
    > 列el-col

    #4.项目-首页-权限认证
    beforeCreate() {
    const token = localStorage.getItem("token");

    if (!token) {
      this.$router.push({ name: "login" });
    }
  }

#5.项目-配置用户管理列路由
(1).开启路由模式 :router:"true"
(2).index='users'绑定用户的理由名称

#6.项目-用户列表(重点)
(1) el-card 卡片
(2)
