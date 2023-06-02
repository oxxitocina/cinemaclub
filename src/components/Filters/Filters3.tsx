import Typography from '@mui/material/Typography'
import SortingSelect from '../UI/FilterSeletcts/SortingSelect/SortingSelect'
import DateSelect from '../UI/FilterSeletcts/DateSelect/DateSelect'
import GenresSelect from '../UI/FilterSeletcts/GenresSelect/GenresSelect'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import ResetFiltersButton from '../UI/ResetFiltersButton/ResetFiltersButton'
import CloseIcon from '../UI/CloseIcon/CloseIcon'

export default function Filters3() {
  return (
    <>
            <Box sx={{width: '90%', margin: '0 auto', marginTop: '80px', marginBottom: '40px',}}>
            <Stack spacing={2}>
                <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
                    <Typography variant="h5" component="h2" sx={{ color: 'white' }}>
                        Фильтры:
                    </Typography>
                    <CloseIcon/>
                </Box>
                <Box>
                    <SortingSelect />
                    </Box>
                    <Box>
                    <DateSelect />
                    </Box>
                    <Box>
                    <GenresSelect />
                    </Box>
                    <Box>
                    <ResetFiltersButton/>
                    </Box>
            </Stack>
            </Box>
    </>
  )
}
