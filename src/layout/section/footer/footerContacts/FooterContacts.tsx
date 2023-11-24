import styled from "styled-components";
import { FlexWrapper } from "../../../../components/FlexWrapper";

type FooterContactsPropsType = {
    contacts: Array<
        {
            name: string;
            seoTag: string;
            front: string;
        }
    >;
}


export const FooterContacts = (props: FooterContactsPropsType) => {
    return (
        <FlexWrapper direction="column" justify="space-around">
            <span>Contacts:</span>
            {props.contacts.map((item, index) => {
                return (
                    <div key={index}>
                        <span>{item.name}:</span>
                        <a href={item.seoTag}>{item.front} </a>
                    </div>
                )
            })}
        </FlexWrapper>
    );
}

