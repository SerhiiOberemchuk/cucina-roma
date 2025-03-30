import { arrayCookiesPages } from "@/data/cookies_pages/arrayCoociesPages";

type Props = { params: Promise<{ page: string }> };

async function CookiesPage({ params }: Props) {
  const { page } = await params;
  const pageInfo = arrayCookiesPages.filter((item) => item.page === page)[0];
  return (
    <div>
      <h1 className="textH3 mb-3"> {pageInfo.titleDocument}</h1>
      <span className="">{pageInfo.dataValid}</span>
      <ul className="mt-3 flex flex-col gap-3">
        {pageInfo.items.map((item, index) => (
          <li key={index}>
            <h3 className="big_text_medium mb-3">{item.itemTitle}</h3>
            {item.description.map((item, index) => (
              <p key={index}>{item}</p>
            ))}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CookiesPage;
