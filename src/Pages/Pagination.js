import React, { useEffect , useState} from 'react'

const Pagination = () => {



    let da = []
    
    const [data, setData] = useState([])
    const [pageNo, setPageNo] = useState(1)
    const [loading, setLoading]= useState(false)

    const url = `https://randomuser.me/api/?page=${pageNo}`

    const getData = ()=>{
        setLoading(true)
        fetch(url).then((response) => {
            return response.json()
         }).then((data) => {
            console.log(data, "data")
           
            setData(data.results)
            console.log(data, "dataa")
            setLoading(false)
         })


        
    }
   
   
    const increasePageNo = (e)=>{
        const id = parseInt(e.currentTarget.id)
        setPageNo(id)
        console.log(id, "event target")
    }

    const nextPage = ()=>{
        console.log(pageNo, "id")
        if(pageNo>=5){
            setPageNo(1)
            return
        }
        setPageNo(pageNo+1)
    }

    da = "comeee"
    const prevPage =()=>{
        console.log(pageNo, "id")

        if(pageNo<=0){
            setPageNo(5)
            return
        }

        setPageNo(pageNo-1)
    }
    
    useEffect(()=>{
        getData()
    },[pageNo])

  return (
    <div>
        
        <h2>Users data</h2>
       
       
           
            <div>
           {!loading ?
              data?.map((user)=>{
                console.log(user, "userrr")
                return (
                    <div>
                        <img src={user.picture?.medium} alt="my_picture" width="300" height="200"/>
                        <h>{user.name.title +'' + user.name.first + user.name.last}</h>
                        <p>{user.dob.date + user.dob.age}</p>
                    </div>
                )
            })
             : <p>loading data</p>
           }
            </div>
       
       
    
       <div>
            <h4 onClick={prevPage}>prev</h4>
            <p id='1' onClick={increasePageNo}>1</p>
            <p id='2' onClick={increasePageNo}>2</p>
            <p id='3' onClick={increasePageNo}>3</p>
            <p id='4' onClick={increasePageNo}>4</p>
            <p id='5' onClick={increasePageNo}>5</p>
            <h4 onClick={nextPage}>next</h4>
        </div>
    </div>
  )
}

export default Pagination
