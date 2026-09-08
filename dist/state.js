export const catalog={
 garden:{name:'花圃',cost:60,income:3,titles:['花间小圃','蔷薇花园','喷泉庭园','花语凉亭','皇家花庭'],details:['整齐花畦与白色矮篱。','花拱门与攀缘蔷薇。','中央石雕喷泉与流动水景。','青瓦凉亭、花箱与木栏。','对称绿篱、雕花花盆与金色亭顶。']},
 house:{name:'小屋',cost:120,income:7,titles:['林间小屋','阁楼花舍','阳台洋馆','庭院别邸','钟楼庄园'],details:['奶油色墙面、红瓦坡屋顶与木构窗。','阁楼老虎窗、花箱与条纹雨棚。','新增二层、观景阳台和木栏杆。','侧翼客房、围栏庭院与迎风旗帜。','八角钟楼、铜绿尖顶和庭院石饰。']},
 mill:{name:'风车',cost:220,income:14,titles:['乡间风车','谷仓风车','回廊风车','丰穰工坊','黄金风车馆'],details:['石灰墙、青色锥顶与木制风帆。','增建谷仓、窗格与储粮木桶。','塔身升高，新增环形观景回廊。','扩建侧翼工坊，增添花窗与旗帜。','金色冠顶、庭前灯饰和鲜花迎宾道。']},
 lighthouse:{name:'灯塔',cost:500,income:30,titles:['海风灯塔','星灯眺台','守灯人之家','双塔灯苑','晨星灯宫'],details:['石砌塔身、玻璃灯室与青铜塔尖。','灯室周围增建金色观景护栏。','侧翼守灯人小屋与窗台花箱。','入口双尖塔、围栏和迎风旗帜。','仪式拱门、金色檐饰与对称花庭。']}
};
export const slots=[[-3.3,-2.8],[0,-3.2],[-3.3,2.6],[0,2.8],[-5.1,-.05],[-1.7,-.1],[1.7,-.05],[3.5,2.4]];
export class GameState{
 constructor(){this.coins=180;this.paused=false;this.buildings=[{type:'house',slot:0,level:2},{type:'mill',slot:1,level:1},{type:'garden',slot:2,level:2}];this.selected=null;}
 get income(){return 2+this.buildings.reduce((s,b)=>s+catalog[b.type].income*b.level,0)}
 canBuild(type){const t=catalog[type];return !!t&&!this.paused&&this.coins>=t.cost&&this.buildings.length<slots.length&&!(type!=='lighthouse'&&this.buildings.length===7&&!this.buildings.some(b=>b.type==='lighthouse'))&&!(type==='lighthouse'&&(this.buildings.length<3||this.buildings.some(b=>b.type===type)))}
 build(type){if(!this.canBuild(type))return null;const slot=slots.findIndex((_,i)=>!this.buildings.some(b=>b.slot===i));const b={type,slot,level:1};this.coins-=catalog[type].cost;this.buildings.push(b);this.selected=b;return b}
 upgradeCost(b){return b?Math.ceil(catalog[b.type].cost*.7*b.level):0}
 canUpgrade(b){return !!b&&!this.paused&&b.level<5&&this.coins>=this.upgradeCost(b)}
 upgrade(b){if(!this.canUpgrade(b))return false;this.coins-=this.upgradeCost(b);b.level++;return true}
 tick(dt){if(!this.paused)this.coins+=this.income*dt}
 gather(){if(!this.paused)this.coins+=12}
}
