import { v4 as uuidv4 } from 'uuid';
import { StyledContList, StyledItem } from './Contacts.styled';
import PropTypes from 'prop-types';

export const Contacts = ({ contacts }) => {
  return (
    <StyledContList>
      {contacts.map(contact => {
        return (
          <StyledItem key={uuidv4()}>
            <span>{contact.name}</span>
            <span>{contact.number}</span>
          </StyledItem>
        );
      })}
    </StyledContList>
  );
};

Contacts.prototype = {
  contacts: PropTypes.array,
};
