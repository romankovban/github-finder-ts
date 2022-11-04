import {Container} from "components/Container";
import {Header} from "components/Header";
import {Search} from "components/Search";
import {UserCard} from "components/UserCard"

import {useState} from "react";
import {GithubError, GithubUser, LocalGithubUser} from "./types";
import {isGithubUser} from "./utils/typeguards";
import {extractLocalUser} from "./utils/extract-local-user";
import {defaultUser} from "./mock";

const BASE_URL = 'https://api.github.com/users/'

export const App = () => {
  const [user, setUser] = useState<LocalGithubUser | null>(defaultUser)

  const fetchUser = async (username: string) => {
    const url = BASE_URL + username

    const res = await fetch(url)
    const user = await res.json() as GithubUser | GithubError

    if (isGithubUser(user)) {
      setUser(extractLocalUser(user))
    } else {
      setUser(null)
    }
  }

  return (
    <Container>
      <Header />
      <Search hasError={!user} onSubmit={fetchUser} />
      {user && (
        <UserCard
          {...user}
        />
      )}
    </Container>
  )
}

