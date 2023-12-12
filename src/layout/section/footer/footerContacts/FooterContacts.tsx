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
        <Constacts>
            <FlexWrapper direction="column" justify="space-between" >

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


        </Constacts>

    );
}

const Constacts = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;    
`