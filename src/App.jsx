import React ,{useRef}from 'react';
import Card from './components/Card';
import './App.css';

const categories_trading_app = [
  { name: "GMGN", logo: "https://play-lh.googleusercontent.com/CB_4aQFK-hyqxNnnBexEvJ3vCkiQl-XA0vGkyLZGxZgLeaBQJ39fBm1TDPgwT-BBdwQ=w240-h480-rw", link: "https://gmgn.ai/?chain=sol&ref=5WfXOx8X", desc: "🚀 Fast Trade,  Fast Copy Trade,  Fast AFK Automation http://gmgn.ai EN " },
  { name: "Debot", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPoWaBhhQwzdWHNW_4C06FWVqWURApIOW2_w&s", link: "https://debot.ai/", desc: "DeBot - AI DeFi  Platform For Smart Crypto Insights. The Gateway To On-Chain Investments .Built On Trust, Committed To \"Do No Evil.\"" },
  { name: "Bloom", logo: "https://cdn4.cdn-telegram.org/file/donaoKaN9oZbBROn7Hnlla6po4FFQNmAxjAAbX9M6tPYdx5nPXkzr6GdjADrC4LkcgloEd-U5yz07ALJqtyeZIdNfy-KL4w34AjCodnuyeOSOGid9Qb8hj5QCdvnLWa-JfQNbYVEX_OX3Jst6q39E86otwr4KQG5Nrdg18RZhNbSaSgyXbPEzvudNVM9CjPywC-9b2tvP-5ELRqh06jg4ZM2iKYCX9XhZE8qaxWseq9IXrXicB73JIIMQFQmgA9jKXF5kVMzOk7wBlPmFMg7ZLZnX2ioUydbHgbXwnJj6ldveRtMIgCmjkHt12diFR8ihLeVnJizax-9LJdtsq2Dfw.jpg", link: "https://t.me/BloomSolana_bot?start=ref_AFXLWYTQO5", desc: "Welcome to Bloom 🌸, your unfair advantage in crypto. Whether you're here to take advantage of the latest token launches or trade confidently with our suite of powerful features, we’re excited to help you grow and succeed." },
];
const categories_smart_money = [
  { name: "Debot", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPoWaBhhQwzdWHNW_4C06FWVqWURApIOW2_w&s", link: "https://debot.ai/", desc: "DeBot - AI DeFi  Platform For Smart Crypto Insights. The Gateway To On-Chain Investments .Built On Trust, Committed To \"Do No Evil.\"" },
  { name: "Faster100x", logo: "https://pbs.twimg.com/profile_images/1879545798758944769/JwY-ltf6_400x400.jpg", link: "https://t.co/IFnsD25jCG", desc: "" },
  { name: "CashCash 中文官方群", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMAZnoxz6x3UUJJg9p9HhRgderpevHNas6kA&s", link: "https://t.me/CashCash_ZhGroup/7s", desc: "Fomo Call 打狗必備" },
  { name: "聪明钱💰监控", logo: "./smartmoney.jpg", link: "https://t.me/huaziClub", desc: "" },
];
const categories_good_extension = [
  { name: "solscan", logo: "https://avatars.githubusercontent.com/u/92743431?s=200&v=4", link: "https://solscan.io/", desc: "" },
  { name: "Chain Insight", logo: "https://img.chaininsight.info/image/_38551f0c-51c9-418d-af88-56fc6428c9d7.jpeg", link: "https://chaininsight.vip/#", desc: "" },
  { name: "GDOG", logo: "./gdog.png", link: "https://g.dog/kol/ranking", desc: "" },
  { name: "XFINDER", logo: "./xfinder.png", link: "https://xfinder.fun/", desc: "" },
  { name: "PumpPull", logo: "https://pumpscam.com/favicon.png", link: "https://pumpscam.com/mintCode?r=xis2qw", desc: "主要功能：查询发过 pump 并删推的历史记录，避免被骗。" },
];

const categories_community = [
  { name: "1000X GEM", logo: "https://pbs.twimg.com/profile_images/1865314120993771524/Pln6jtx-_400x400.jpg", link: "https://x.com/CryptoDevinL", desc: "亞洲最猛打狗社群" },
  { name: "鵝城 DAO", logo: "https://pbs.twimg.com/profile_images/1850421654369017856/fJIUTmvY_400x400.jpg", link: "https://x.com/GooseCityDAO", desc: "麻了 麻了" },
  { name: "一拳(MEME)金狗", logo: "https://pbs.twimg.com/profile_images/1868915700188037125/9i_Kcp3T_400x400.jpg", link: "https://t.me/yiquanchaoren69", desc: "本群为一拳打狗call群" },
  { name: "牛市來了", logo: "./rungoose.png", link: "https://t.me/niusmenz", desc: "不得不說，群主前幾天很神" },
];

const categories_kol = [
  { name: "CryptoD | 1000X GEM", logo: "https://pbs.twimg.com/profile_images/1865314120993771524/Pln6jtx-_400x400.jpg", link: "https://x.com/CryptoDevinL", desc: "" },
  { name: "wwP", logo: "https://pbs.twimg.com/profile_images/1869377540089159681/GD9mWozG_400x400.jpg", link: "https://x.com/wwpa82024", desc: "" },
  { name: "TheClues", logo: "https://pbs.twimg.com/profile_images/1820869369540345856/IqS5VLNX_400x400.jpg", link: "https://x.com/follow_clues", desc: "" },
  { name: "CryptoCharming", logo: "https://pbs.twimg.com/profile_images/1686797519614046208/HkbPiPqY_400x400.png", link: "https://x.com/CryptoCharming1", desc: "" },
  { name: "Zed", logo: "https://pbs.twimg.com/profile_images/1857701522055864320/iz2sDHK1_400x400.jpg", link: "https://x.com/jinruiliu7", desc: "" },
  { name: "Crypto小余", logo: "https://pbs.twimg.com/profile_images/1656128584715735040/X59hrvHM_400x400.jpg", link: "https://x.com/jiji_eth", desc: "" },
  { name: "Ramen", logo: "https://pbs.twimg.com/profile_images/1874646659625623552/nGNdRIjE_400x400.png", link: "https://x.com/aug_eth", desc: "" },
  { name: "Bruce J", logo: "https://pbs.twimg.com/profile_images/1716501283237220352/z59UaW-J_400x400.jpg", link: "https://x.com/BTCBruce1", desc: "" },
];




const App = () => {
  const textRef = useRef(null); // 用于引用文本元素

  const handleCopy = () => {
    // 使用 Clipboard API 复制文本
    if (textRef.current) {
      navigator.clipboard.writeText(textRef.current.textContent)
        .then(() => {
          alert('copied');
        })
        .catch(err => {;
        });
    }
  };
  return (
  <div className="main-container">
    <header>
      <div className="container">
        <h1>Golden-dog-hub</h1>
      </div>
      <p className='slogan'>"Golden-dog-hub: Your Ultimate Meme Coin Tool Directory!"</p>
    </header>
    <main>
      <div className="grid">
        <div className="card-container">
          <h3>Trading App</h3>
          <div className="grid">
            {categories_trading_app.map((item, index) => (
              <Card
                key={index} // 唯一鍵值
                logo={item.logo}
                name={item.name}
                link={item.link}
                desc={item.desc}
              />
            ))}
          </div>
        </div>
        
        <div className="card-container">
          <h3>Smart Money Signal</h3>
          <div className="grid">
          {categories_smart_money.map((item, index) => (
              <Card
                key={index} // 唯一鍵值
                logo={item.logo}
                name={item.name}
                link={item.link}
                desc={item.desc}
              />
            ))}
          </div>
          </div>
          <div className="card-container">
          <h3>Good Tools</h3>
          <div className="grid">
          {categories_good_extension.map((item, index) => (
              <Card
                key={index} // 唯一鍵值
                logo={item.logo}
                name={item.name}
                link={item.link}
                desc={item.desc}
              />
            ))}  
          </div>
          </div>
          <div className="card-container">
          <h3>Community</h3>
          <div className="grid">
          {categories_community.map((item, index) => (
              <Card
                key={index} // 唯一鍵值
                logo={item.logo}
                name={item.name}
                link={item.link}
                desc={item.desc}
              />
            ))} 
          </div>
          </div>
          <div className="card-container">
          <h3>KOL list</h3>
          <div className="grid">
          {categories_kol.map((item, index) => (
              <Card
                key={index} // 唯一鍵值
                logo={item.logo}
                name={item.name}
                link={item.link}
                desc={item.desc}
              />
            ))} 
          </div>
          </div> 
      </div>
    </main>
    <p>If my work has been helpful to you, feel free to support me with a donation:</p>
    <p>solana walet: </p>
    <div 
        ref={textRef} 
        onClick={handleCopy} 
        style={{
          color: 'grey',
          cursor: 'pointer', 
          padding: '5px', 
        }}
      >
       DdRsUDF2SJR4KR4k8fYbqN4wzHQFPLDuJ8fHZbRqhZSW
      </div>
    <div class="dog"></div>
    <footer>
      <div className="container">
        <p>&copy; 2025 Web3 Software Hub. All Rights Reserved.</p>
      </div>
    </footer>
  </div>
  );
};

export default App;
