import { Route } from 'react-router-dom';
import data from '../Data/Menu.js';
import slugify from 'react-slugify';

export default function route() {
  let result;
  data.map((item) => {
    return item.child.map((i) => {
      return i.child.length ? (
        i.child.map((j) => {
          return (
            <Route exact path={`/${slugify(j)}`}>
              {console.log(slugify(j))}
              {(result = [item.title, i.title, j])}
            </Route>
          );
        })
      ) : (
        <Route exact path={`/${slugify(i.title)}`}>
          {console.log(slugify(i.title))}
          {(result = [item.title, i.title])}
        </Route>
      );
    });
  });

  return result;
}
