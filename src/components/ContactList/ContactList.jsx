import { ContactsItem } from "./ContactList.styled";
import { ButtonDelete } from "components/ButtonDelete/ButtonDelete";

import { useSelector } from "react-redux";

import { selectItems } from "redux/contacts/contactSelectors";
import { selectFilter } from "redux/filter/filterSelector";


export const ContactList = () => {
  const data = useSelector(selectItems);
  const filter = useSelector(selectFilter);
  const normolizeFilter = filter.toLowerCase();
  const visibleContacts = data.filter(contact =>
    contact.name.toLowerCase().includes(normolizeFilter)
  );

  return (
    <ContactsItem>
      <ul>
        {visibleContacts.map(data => (
          <li key={data.id}>
            <span>
              {data.name}: {data.number}
            </span>
            <ButtonDelete id={data.id} />
          </li>
        ))}
      </ul>
    </ContactsItem>
  );
};
