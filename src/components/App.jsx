import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout/Layout';

import { Profile } from './Profile/Profile';
import { Statistics } from './Statisties/Statisties';
import { RecipeList } from './RecipeList/RecipeList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';

import user from '../data/user';
import data from '../data/data';
import friends from '../data/friends';

import transactions from '../data/transactions';

export const App = () => {
  return (
    <Layout>
      <GlobalStyle />
      <Profile user={user} />
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />

      <RecipeList items={friends} />
      <TransactionHistory transactions={transactions} />
    </Layout>
  );
};
