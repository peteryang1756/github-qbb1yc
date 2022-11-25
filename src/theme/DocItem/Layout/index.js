import { ReactCusdis } from 'react-cusdis'

function App() {
  return (
    <div>
      <ReactCusdis
        attrs={{
          host: 'https://cusdis.com',
          appId: '3b8fd7f1-8839-4a74-9140-93f87b55e12b',
          pageId: 'PAGE_ID',
          pageTitle: 'PAGE_TITLE',
          pageUrl: 'PAGE_URL'
        }}
      />

    </div>
  )
}