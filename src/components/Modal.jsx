import './Modal.css';
import { useRef } from 'react';

const Modal = ( { setModalPop, info, setInfo, titleNum } ) => {

const titleRef = useRef();
const contentRef = useRef();

  return (

    <div className='modal'>
        <h6>{info[titleNum].title}</h6>
        <p>{info[titleNum].update}</p>
        <p>좋아요 {info[titleNum].count}</p>
        <input type="text" ref={titleRef}/>
        <button onClick = {()=>{
          let newInfo = [...info];
          newInfo[titleNum].title =titleRef.current.value;
          setInfo(newInfo);
        }
        }>제목 수정하기</button>
         <input className='content' type="text" ref={contentRef}/>
         <button onClick = {()=>{
            let newInfo = [...info];
            newInfo[titleNum].content =contentRef.current.value;
            setInfo(newInfo);
         }}>내용 수정하기</button>
         <br/><br/>
        <button  onClick={()=>{ setModalPop(false) }}>닫기</button>
    </div>
  )
}

export default Modal