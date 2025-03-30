import ItemLinks from "@/components/common/Links/ItemLinks";
import { arrayCookiesPages } from "@/data/cookies_pages/arrayCoociesPages";

function Page() {
  return (
    <nav>
      <ul className="btn_text flex flex-col gap-4">
        {arrayCookiesPages.map((item, index) => (
          <ItemLinks
            key={index}
            href={`/docs/${item.page}`}
            title={item.titleForlistPages}
          />
        ))}
      </ul>
    </nav>
  );
}

export default Page;
