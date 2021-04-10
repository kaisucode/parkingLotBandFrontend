
import SimpleModal from './SimpleModal';
import { Box } from '@material-ui/core';

export default function AppHeader() {

  return (
    <div>
      <Box display="flex" justifyContent="flex-end" p={6}>
        {
          // <SimpleModal title="about", header="Parking Lot Band!!!" content="hi" />
        }
        <SimpleModal />
      </Box>
    </div>
  );

}


