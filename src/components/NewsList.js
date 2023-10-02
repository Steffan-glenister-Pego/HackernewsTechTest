import { useState, useEffect } from "react";
import axios from "axios";
import NewsCard from "./NewsCard";
import ReactPaginate from "react-paginate";

function NewsList() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);

  const handlePageChange = (event) => {
    console.log(event);
    setCurrentPage(event.selected);
  };

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      try {
        const { data } = await axios.get(
          "https://hn.algolia.com/api/v1/search?"
        );
        const { hits, nbPages } = data;
        setArticles(hits);
        setTotalPages(nbPages);
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="container">
      <h1 className="page-title">Hacker News</h1>
      <div class="news-container">
        {isLoading ? (
          <p>Loading .....</p>
        ) : (
          articles.map((article) => (
            <NewsCard article={article} key={article.objectID} />
          ))
        )}
      </div>
      <ReactPaginate
        nextLabel=">>"
        previousAriaLabel="<<"
        breakLabel="..."
        forcePage={currentPage}
        pageCount={totalPages}
        renderOnZeroPageCount={null}
        onPageChange={handlePageChange}
        className="pagination"
        activeClassName="active-page"
        previousClassName="previous-page"
        nextClassName="next-page"
      />
    </div>
  );
}

export default NewsList;
