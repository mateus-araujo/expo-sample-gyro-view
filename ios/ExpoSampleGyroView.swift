import ExpoModulesCore
import UIKit

class ExpoSampleGyroView: ExpoView {
    let gyroView = GyroView()
    
    required init(appContext: AppContext? = nil) {
        super.init(appContext: appContext)
        clipsToBounds = true
        addSubview(gyroView)
    }
    
    override func layoutSubviews() {
        gyroView.frame = bounds
    }
}
