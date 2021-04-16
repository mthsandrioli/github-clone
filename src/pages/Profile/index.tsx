import React from 'react';

import { 
  Container, 
  Main, 
  LeftSide, 
  RightSide, 
  Repos, 
  CalendarHeading, 
  RepoIcon, 
  Tab 
} from './styles';

import ProfileData from '../../components/ProfileData';
import RepoCard from '../../components/RepoCard';
import RandomCalendar from '../../components/RandomCalendar';

const Profile: React.FC = () => {
  const TabContent = () => (
    <div className="content">
      <RepoIcon />
      <span className="label">Repositories</span>
      <span className="number">18</span>
    </div>
  );
  
  return (
    <Container>
      <Tab className="desktop" >
        <div className="wrapper">
          <span className="offset" />
          <TabContent />
        </div>
        <span className="line" />
      </Tab>
      
      <Main>
        <LeftSide>
          <ProfileData 
            username={'mthsandrioli'}
            name={'Matheus Andrioli'}
            avatarUrl={'https://avatars.githubusercontent.com/u/65318852?v=4'}
            followers={345}
            following={179}
            company={'Paipe'}
            location={'Brazil'}
            email={'matheus_andrioli@hotmail.com'}
            blog={'linkedin.com/in/mthsandrioli'}
          />
        </LeftSide>
        
        <RightSide>
          <Tab className="mobile" >
            <TabContent />
            <span className="line" />
          </Tab>
          
          <Repos>
            <h2>Random repos</h2>

            <div>
              {[1, 2, 3, 4, 5, 6].map(n => (
                <RepoCard 
                  key={n}
                  username={'mthsandrioli'}
                  reponame={'ignews'}
                  description={'Description'}
                  language={'TypeScript'}
                  stars={5}
                  forks={1}
                />
              ))}
            </div>
          </Repos>

          <CalendarHeading>
            Random calendar (do not represent actual data)
          </CalendarHeading>

          <RandomCalendar />
          
        </RightSide>
      </Main>
    </Container>
  );
}

export default Profile;