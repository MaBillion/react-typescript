export default class Global {
    public static planStatusTrack = new Map([
        [1,'待受理'],
        [2,'已受理'],
        [3,'待放飞'],
        [4,'已放飞'],
        [5,'起飞报'],
        [6,'降落报'],
        [7,'取消计划'],
        [8,'拒绝受理'],
        [9,'拒绝放飞'],
        [10,'异常']
    ]);

    public static planDetailStatus = new Map([
        [0, "待受理"],
        [1, "待受理"],
        [2, "已受理"],
        [3, "拒绝受理"],
        [4, "待放飞"],
        [5, "已放飞"],
        [6, "拒绝放飞"],
        [7, "起飞"],
        [8, "完成"],
        [9,"取消计划"],
        [10,"取消计划"],
        [15,"取消计划"],
        [16,"取消计划"],
        [17,"取消计划"],
        [11,"异常"],
        [12,"异常"],
        [13,"异常"],
        [14,"异常"]
    ]);

    public static airspaceType = new Map([
        [1, 'circle'],
        [2, 'line'],
        [3, 'polygon']
    ]);

    public static flyRules = new Map([
        [1, '目视飞行'],
        [2, '仪表飞行'],
        [3, '目视或仪表飞行']
    ]);

    public static domain = '.skyreq.com'
}