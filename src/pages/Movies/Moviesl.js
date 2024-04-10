import React, { useState } from 'react'
import { useSearchMovie } from '../../hooks/searchMovie'
import { useSearchParams } from 'react-router-dom'
import { Spinner, Alert, Container, Row, Col } from 'react-bootstrap'
import { MovieCard } from '../Homepage/components/moviecard/MovieCard'
import ReactPaginate from 'react-paginate'

// nav바에서 클릭해서 온경우 : popular movie 보여주기
// 키워드를 입력해서 온 경우 : 키워드와 관련된 영화


// pagination
export const Moviesl = () => {
  const [query] = useSearchParams()
  const kw = query.get('q')
  const [page, setPage] = useState(1)
  const { data, isLoading, isError, error } = useSearchMovie({ kw,page })
  const handlePageClick = ({selected}) => {
    setPage(selected + 1)
  }
  if (isLoading) {
    return (
      <div className='spinner-area'>
        <Spinner
          animation='border'
          variant='danger'
          style={{ width: '5rem', height: '5rem' }} />

      </div>
    )
  }
  if (isError) {
    return <Alert variant='danger'>{error.message}</Alert>
  }
  console.log('dd', data)
  return (
    <div>
      <Container>
        <Row>
          <Col lg={4} xs={12}>
            {''}
            필터{''}
          </Col>
          <Col lg={8} xs={12}>
            <Row>{data?.results.map((item, idx) =>
              (<Col key={idx}><MovieCard movie={item} /></Col>))}
            </Row>
            <ReactPaginate 
              nextLabel="next >"
              onPageChange={handlePageClick}
              pageRangeDisplayed={3}
              marginPagesDisplayed={2}
              pageCount={data?.total_pages} //total page !
              previousLabel="< previous"
              pageClassName="page-item"
              pageLinkClassName="page-link"
              previousClassName="page-item"
              previousLinkClassName="page-link"
              nextClassName="page-item"
              nextLinkClassName="page-link"
              breakLabel="..."
              breakClassName="page-item"
              breakLinkClassName="page-link"
              containerClassName="pagination"
              activeClassName="active"
              renderOnZeroPageCount={null}
              forcePage={page-1}
            />
          </Col>
        </Row>
      </Container>
    </div>
  )
}
