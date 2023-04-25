import React, { useEffect, useState } from 'react'
import { useTypeSelector } from '../hooks/useTypedSelector'
import { useAction } from '../hooks/useAction'
import { useNavigate } from 'react-router-dom'
import Navigation from '../components/Navigation'
import CandidateList from '../components/Lists/CandidateList'
import MySelect from '../components/UI/select/MySelect'
import MyInput from '../components/UI/input/MyInput'

const CandidatePage = () => {
    const {auth, isAuth} = useTypeSelector(state => state.auth)
    const {users} = useTypeSelector(state => state.user)
    const {refresh, logout, fetchProjectByIdAction, fetchUserByIdAction, fetchUsers} = useAction()


    useEffect(() => {
        fetchUserByIdAction(auth.user.id)
        fetchUsers()
    }, [auth])

    let employers = users;

    const [selectedSort, setSelectedSort] = useState('');
    const [searchQuery, setSearchQuery] = useState<string>('');

    const sortPosts = (sort: string) => {
        setSelectedSort(sort)
        console.log(sort)
        if(sort == 'firstname') {
            employers = employers.sort((a, b) => a.firstname.localeCompare(b.firstname));
        }
        else if (sort == 'email') {
            employers = employers.sort((a, b) => a.email.localeCompare(b.email));
        }
        else if (sort == 'secondname') {
            employers = employers.sort((a, b) => a.secondname.localeCompare(b.secondname));
        }
    }

    const changeSearchQuery = (search: string) => {
        setSearchQuery(search)
        console.log(searchQuery)
    }

    return(
        <div>
            <Navigation />
            <div>
                <CandidateList employers={employers}/>
            </div>
        </div>
    )
}

export default CandidatePage;