import React from 'react';
import { Link } from 'react-router-dom';

import { 
  Container, 
  Breadcrumb, 
  RepoIcon, 
  Stats, 
  StarIcon, 
  ForkIcon, 
  LinkButton, 
  GithubIcon 
} from './styles';

const Repo: React.FC = () => {
  return (
    <Container>
      <Breadcrumb>
        <RepoIcon />
        <Link className={'username'} to={`/mthsandrioli`}>
          mthsandrioli
        </Link>

        <span>/</span>

        <Link className={'reponame'} to={`/mthsandrioli/ignews`} >
          ignews
        </Link>
      </Breadcrumb>

      <p>Description</p>

      <Stats>
        <li>
          <StarIcon />
          <b>5</b>
          <span>stars</span>
        </li>
        <li>
          <ForkIcon />
          <b>1</b>
          <span>forks</span>
        </li>
      </Stats>

      <LinkButton href={'https://github.com/mthsandrioli/ignews'}>
        <GithubIcon />
        <span>View on GitHub</span>
      </LinkButton>

    </Container>
  );
}

export default Repo;