import './App.css';
import { useState } from 'react';
import Modal from './components/Modal';

function App() {
  const [info, setInfo] = useState([
    { title: "서울나들이~", favorite:false,  content: '', update: "9월 11일 발행" }, 
    { title: "전주먹방!",favorite:false, content: '', update: "9월 12일 발행"  }, 
    { title: "대전빵축제~",favorite:false, content: '', update: "9월 14일 발행"  }, 
    { title: " 여수~밤바다",favorite:false, content: '', update: "9월 15일 발행"  }]);

  const [modalPop, setModalPop] = useState(false);
  const [titleNum, setTitleNum] = useState(0);
  const [input, setInput] = useState('');
  // const [favorite, setFavorite] = useState(false);

  const likeSort = () => {
    let sortInfo = [...info];
    sortInfo.sort((a, b) => a.count > b.count ? 1 : -1);
    setInfo(sortInfo);
  }

  const titleSort = () => {
    let sortInfo = [...info];
    sortInfo.sort((a, b) => a.title > b.title ? 1: -1 );
    setInfo(sortInfo);
  }

  return (
    <div className="App">
      <h4>React Blog</h4>
      <button onClick={()=>{likeSort()}}>좋아요 순 정렬하기</button>
      <button onClick={()=>{titleSort()}}>제목 순 정렬하기</button>
      <input type="text" className='addText'
      onChange={(e)=>{
        setInput(e.target.value);
      }}
    />
    <button onClick={()=>{
      let addInfo = [...info];
      addInfo.unshift({ title: input,favorite: false, content: '', update: "9월 20일 발행" })
      setInfo(addInfo); 
    }}>글 등록하기</button>
      {info.map((obj, index) => {
        return (
          <div className='list' key={index}>
          <h6 className='title' onClick={
            ()=>{
              setModalPop(!modalPop)
              setTitleNum(index);
            }}>{obj.title}</h6>
          
          <button className='good' 
            onClick ={()=>{
              let favoriteInfo = [...info];
              favoriteInfo[index].favorite = !favoriteInfo[index].favorite; 
              setInfo(favoriteInfo);
              }}>
            {obj.favorite ?  <span>&#128150;</span> :<span> &#128155;</span>}
            </button>

            <p>{obj.content}</p>
          <div>{obj.update}</div>
          <button onClick={()=>{
            let deleteInfo = [...info];
            deleteInfo.splice(index,1);
            setInfo(deleteInfo);
          }}>삭제하기</button>
        </div>
        )
      })}

    {modalPop && <Modal 
                    setModalPop={setModalPop} 
                    info={info} 
                    setInfo={setInfo}
                    titleNum={titleNum}
            />}

    </div>
  );
}

export default App;
