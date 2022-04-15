import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function Nowplaying() {
    const [List, setList] = useState([])
    useEffect(() => {
        axios({
            url: "https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=2&k=8077848",
            headers: {
                'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.0","e":"16395416565231270166529","bc":"110100"}',
                'X-Host': 'mall.film-ticket.film.list'
            }
        }).then(res => {
            // console.log(res.data.data.films);
            setList(res.data.data.films)
        })
    }, [])

    const navigate = useNavigate()
    const handleChangePage = (id) => {
        navigate(`/detail/${id}`)
    }
    return (
        <div>
            <ul>
                {
                    List.map(item =>
                        <li key={item.filmId} onClick={() => handleChangePage(item.filmId)}>{item.name}</li>
                    )
                }
            </ul>
        </div>
    )
}
