import {Injectable} from "@angular/core";
/**
 * Created by Ryan on 2/12/2017.
 */

@Injectable()
export class Constants{
  newListingError : string = "Some fields were not entered correctly";
  listingSavedSuccessfully : string = "Listing Saved Successfully";
  listingTypes = ['Books & Ephemera', 'Art', 'Coins & Currency', 'Gems & Minerals', 'Diverse Collectibles'];
}
