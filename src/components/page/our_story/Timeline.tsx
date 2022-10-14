import React, {FC} from 'react'
import Image, {StaticImageData} from 'next/image'
import styled from 'styled-components';

import beginnings from '../../../assets/img/timeline/beginnings.jpg'
import relocation from '../../../assets/img/timeline/relocation.jpg'
import renaissance from '../../../assets/img/timeline/renaissance.jpg'
import newEra from '../../../assets/img/timeline/newEra.jpg'
import testing from '../../../assets/img/timeline/testing.jpg'
import riseUp from '../../../assets/img/timeline/riseup.jpg'
import Text from "../../text/Text";

interface TimelineEntry {
    title: string,
    description: string,
    image: StaticImageData
}

const TIMELINE_DATA: TimelineEntry[] = [
    {
        title: 'Beginnings (1998-2006)',
        description:
            'FRC Team 303: Vulgen’s Heroes was created in 1998 as a partnership between Bihler of America, the Midland school and Pingry Academy. After their first season in 1999, Pingry decided to not participate the following year, and Bridgewater-Raritan High School took their place. Throughout the next several years, this new partnership was incredibly successful. The BRHS and Midland students had the opportunity to work alongside real engineers to solve the fun challenge that FIRST created every year, and Bihler engineers enjoyed the challenge of mentoring students and assisting in the creation process, all  with tight deadlines. After their second season, the team also changed its name from Vulgen’s Heroes to Panther Robotics, after the mascot of BRHS. Throughout this time period, it was not uncommon for Team 303 to take home event banners from competitions.',
        image: beginnings,
    }, {
        title: 'Relocation (2007)',
        description:
            'After the successful first several seasons for the team, Bihler unfortunately came to the point where they could no longer allow their facilities to be used by the team. This was problematic to the team since their workspace, mentors, and funding all came from Bihler. The team went searching for a new sponsor to replace Bihler, but unfortunately, due to the search and other reasons, Midland decided to leave the team as well. Team 303 was now exclusively part of the Bridgewater-Raritan High School. As the 2007 season approached, things began to look up; while the team did not have one big sponsor to replace Bihler, many smaller donations were starting to fill the gap, but the team was still desperately in need of a build site. After looking at school classrooms, students’ garages, and other solutions, Pressure Tube Manufacturing (PTM), stepped in, and allowed Panther Robotics use of its facilities.',
        image: relocation,
    },
    {
        title: '303 Renaissance (2008 – 2010)',
        description:
            'With new-found stability, Team 303 went through an era of massive growth and derenaissancevelopment. They continued working to give back to the community in new ways, such as raking leaves and shoveling snow for the elderly and creating an engineering program for fourth and fifth graders to attend after school. The team also started an off-season event called the Bridgewater-Raritan Battle Royale or BR2, which was hosted  yearly in late May and attended by roughly thirty teams. The team also started several green initiatives such as recycling metal scraps and cans, collecting old cell phones and electronics, and cleaning up the high school. These activities both benefited the team and the community. The growth of the team culminated with its successful 2010 season, in which it made waves in both the New Jersey and Connecticut Regionals by making it into semi-finals and quarter-finals respectively, and running a strategy booth to help every team maximize their scouting information.',
        image: renaissance,
    },
    {
        title: 'A New Era (2011)',
        description:
            'At the end of 2011, Team 303 lost their workspace once more when, after an ownership change, PTM decided that they would no longer provide a space for the team. Fortunately, the team quickly found a temporary workspace at STS Tire & Auto Center that would give them a place to work during the build season. That temporary workspace turned into a strong partnership and a permanent home for the team. 2011 was a huge year for the team; with the wins of  both the New Jersey and Philadelphia Regionals and making it to eliminations at the World Championship. The summer that followed that season, the team formed the Student Leadership Council (SLC). The creation of the SLC was a huge milestone that marked a large transition of power from the mentors/advisors to the students.',
        image: newEra,
    }, {
        title: 'Testing… (2012 – 2019)',
        description:
            `After deciding their team name and colors were not unique, Panther Robotics became The T.E.S.T. Team 303 with a unique teal color and vibrant test pattern logo, specifically SMPTE color bars, or Engineering Guideline EG 1-1990. T.E.S.T. stands for Technologists, Engineers, Students, and Teachers, the major groups that make up the team. The change was a massive success that lead to the team winning the Imagery award at their second competition of the season. 2013 was an even better season for the team.. Team 303 was one of the top teams in their region, qualified for the World Championship, then ended up being the captain of the alliance that went on to win the entire division. The team had another monumental year in 2014, not only winning the Chairman’s award for the first time ever at a district event, but they won it again at the regional championship, beating teams who have been winning it consistently for years.

In 2019, a major revamp occurred in the T.E.S.T. Team, where in order to better reflect the needs of the team, the leadership system was modified and instead of the SLC, a new team structure was created featuring Project Managers, Project Supervisors, and Coordinators, with the intent to create better harmony between all team members and to create a more efficient chain of productivity.

In 2020, they took part in the Infinite Recharge Challenge and won the Engineering Inspiration Award as well as the Donald Bowers Award.

In 2021, they plan to take part in the Infinite Recharge’s Innovation and Game Design Challenges. Even though Covid-19 has made a great impact on the team, it has not stop them from doing what they do best: Working Together as a team. `,
        image: testing,
    }, {
        title: 'Rise Up (2020 – Present)',
        description:
            `In 2020, they took part in the Infinite Recharge Challenge and won the Engineering Inspiration Award as well as the Donald Bowers Award. Unfortunately the arrival of COVID made going to in-person competitions not possible. Team 303 instead focused on Virtual Collaboration to get the ball rolling in 2021.
testing

They took part in the Infinite Recharge’s Innovation and Game Design Challenges. However when there was a glimpse of hope over the horizon for going back in-person, Hurricane Ida came in and flooded the warehouse where the team used to work. Due to the Warehouse having toxic chemicals in the soil surrounding it, Team 303 was forced to find a new place to continue their works.

Losing STS was a hard hit to Team 303 as all their equipment and supplies where drowned by the flood. However, the warm memories kept the team members to push harder and find a way to be a part of the competition. With the help of the Bridgewater Raritan School District, Team 303 was able to relocate to an Administration building where they plan to build their robot for the 2022 FRC Rapid React Competition. With the aid of several teams donations and a strong will to succeed, Team 303 still perceivers to give their best efforts for this years competition.`,
        image: riseUp,
    },
]

const Timeline: FC = () => {
    return (
        <TimelineWrapper>
            {TIMELINE_DATA.map((entry, i) => (
                <TimelineElement side={i % 2 == 0 ? TimelineSide.LEFT : TimelineSide.RIGHT} style={{
                    gridColumn: i % 2 == 0 ? 1 : 3,
                    gridRow: `${i + 1} / span 2`,
                    justifySelf: i % 2 == 0 ? 'right' : 'left',
                }}>
                    <Image src={entry.image} layout={'responsive'}/>
                    <Text size='xl' weight='semibold'>{entry.title}</Text>
                    <Text color='secondary' size='sm'>{entry.description}</Text>
                </TimelineElement>
            ))}
            <TimelineCenter/>
        </TimelineWrapper>
    )
}

const TimelineWrapper = styled.section`
    display: grid;
    grid-template-columns: 1fr 0.75rem 1fr;
    gap: 1rem;
    padding: 2rem 8rem;
`

enum TimelineSide {
    LEFT, RIGHT
}

const TimelineElement = styled.div<{
    side: TimelineSide
}>`
    padding: 1.5rem;
    border-radius: 0.75rem;
    background-color: ${props => props.theme.backgroundSecondary};
    ${props => props.side == TimelineSide.LEFT ? 'margin-right' : 'margin-left'}: 3rem;
    border: 2px solid ${props => props.theme.backgroundStroke};

    display: flex;
    flex-direction: column;
    height: fit-content;
    gap: 0.75rem;
    position: relative;

    &::after {
        content: '';
        position: absolute;
        background-color: ${props => props.theme.teal300};

        height: 0.75rem;
        width: 3rem;
        ${props => props.side == TimelineSide.LEFT ? 'right' : 'left'}: -4.5rem;
        border-radius: 4rem;
        top: 50%;
    }
`

const TimelineCenter = styled.div`
    background-color: ${props => props.theme.teal300};
    height: 100%;
    width: 100%;
    grid-column: 2;
    grid-row: 1 / span ${TIMELINE_DATA.length + 1};
    border-radius: 4rem;
`

export default Timeline