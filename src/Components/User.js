import React,{useEffect,useState} from 'react'
import axios from 'axios';
export const User=(props) =>{
    var overAllcommit=0;
    const {username} =props;
    const [resp, setGitData] = useState({ data: [], repos: [],commits:[]});

    useEffect(() => {
        async function fetchData() {
            const fetchData = async () => {
                const respGlobal = await axios(
                  `https://api.github.com/users/${username}`
                );
                const respRepos = await axios(
                  `https://api.github.com/users/${username}/repos`
                );
                fetchCommit(respRepos.data);

                setGitData({ data: respGlobal.data, repos: respRepos.data });
              };
          
              fetchData();
          }
        async function fetchCommit(repoes){
            const fetchCommit=async ()=>{
                const commitslist=[];
                repoes.map(async (repo)=>{
                    const commits=await axios(`https://api.github.com/repos/${username}/${repo.name}/commits`);
                    
                    commitslist.push(commits.data);
                    

                })
                totalc(commitslist)
            }
            fetchCommit();
        }
          
          fetchData();
          
    }, [username])
     


   
    const totalc=(arr)=>{
        var totalCommits=0;
        arr.map((ele)=>totalCommits+=ele.length);
        return totalCommits;
    }

   

    return (
    <div>
        <li>followers {resp.data.followers}</li>
        <li>following {resp.data.following}</li>
        <li>public_repos {resp.data.public_repos}</li>
        <li>Name :{resp.data.name}</li>
        <li>Total commits: {overAllcommit}</li>
        <img src={resp.data.avatar_url} alt={resp.data.name}/>
    </div>
    )
}
