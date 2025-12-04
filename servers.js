// 服务器数据
const serverList = [
    {
        id: 1,
        name: "CloudServer-1C5G10M",
        vendor: "阿里云",
        type: "CloudServer",
        memory: "5GB",
        ip: "192.168.1.1",
        bandwidth: "10Mbps",
        price: "$5/月",
        monthlyCost: 60,
        expire: "2024-12-31",
        status: "normal",
        sshUser: "root"
    },
    {
        id: 2,
        name: "Virtuozzo-1C1G10M",
        vendor: "腾讯云",
        type: "Virtuozzo",
        memory: "1GB",
        ip: "192.168.1.2",
        bandwidth: "10Mbps",
        price: "$3/月",
        monthlyCost: 36,
        expire: "2025-01-15",
        status: "normal",
        sshUser: "root"
    },
];

// 服务器状态映射
const serverStatus = {
    'sold': { text: '已售', class: 'badge-sold', footerClass: '' },
    'normal': { text: '正常', class: 'badge-normal', footerClass: 'footer-normal' }
};
