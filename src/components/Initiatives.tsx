import React from 'react';
import Image from 'next/image'
import SectionHeader from '@/components/SectionHeader'
import Link from 'next/link';
import { Grid, Typography } from '@mui/material';
import { MdOutlineEventNote } from 'react-icons/md';

export const Initiatives = () => {
  return (
    <div className = "mt-2">
      <SectionHeader title="GovTech's Intitatives" Icon={MdOutlineEventNote} />
      <div className = "grid-auto-rows md:grid md:grid-cols-3 md:gap-2">
        <Grid item xs={4}>
          <Link href="https://supportgowhere.life.gov.sg/categories/mental-health?activeTab=services" target="_blank">
            <Image src={'/img/SupportGoWhere.png'} alt="SupportGoWhere" width={500} height={500}/>
            <Typography variant="h6">SupportGoWhere</Typography>
            <br />
            <Typography>Find support schemes and services all in one place.</Typography>
          </Link>
        </Grid>

        <Grid item xs={4}>
          <Link href="https://www.facebook.com/InsideGovTech/" target="_blank">
            <Image src={'/img/Play@Govtech.png'} alt="Play@Govtech" width={500} height={500}/>
            <Typography variant="h6">Play@Govtech</Typography>
            <br />
            <Typography>
              Join interest groups and hang out with other fellow Govtechies to take your mind off work!
            </Typography>
          </Link>
        </Grid>

        <Grid item xs={4}>
          <Link href="" target="_blank">
            <Image src={'/img/Wellness@govtech.png'} alt="Wellness@govtech" width={500} height={500}/>
            <Typography variant="h6">Wellness@Govtech</Typography>
            <br />
            <Typography>
              Mental health is equally as important as your physical health.
              <br />
              Join our relaxing sessions of meditation through our telegram group!
            </Typography>
          </Link>
        </Grid>
      </div>
    </div>
  );
};

export default Initiatives
