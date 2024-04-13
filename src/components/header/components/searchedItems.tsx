import CatalogCard from "components/catalogCard";
import Container from "modules/container";
import { useHooks } from "hooks";
import { useEffect } from "react";

const SearchedItems = ({ navBarState, searchNameDebounced }: any) => {
  const { get } = useHooks()

  useEffect(() => {
    if (navBarState) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [navBarState]);

  

  return (
    <div className="searched-items-wrapper">
      <div className={`searched-items-overlay ${navBarState ? 'show' : ''}`} />
      <div className={`searched-items-container ${navBarState ? 'show' : ''}`}>
        <Container.All
          name='searched-products'
          url={`products/search/${searchNameDebounced}`}
        >
          {({ items }) => {
            return (
              <div className="container">
                {items.length ? <div className='catalog-list'>
                  {items?.map((item) => (
                    <CatalogCard key={get(item, 'id')} {...{ item }} />
                  ))}
                </div> : <></>}
              </div>

            )
          }}

        </Container.All>
      </div>
    </div>
  )
}

export default SearchedItems