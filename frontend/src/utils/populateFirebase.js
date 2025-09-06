import firebaseService from '../services/firebaseService';
import { 
  samplePublications, 
  sampleProjects, 
  sampleAchievements, 
  sampleNewsEvents,
  samplePeople 
} from './sampleData';

/**
 * Populate Firebase with sample data for testing
 */
export const populateFirebaseWithSampleData = async () => {
  try {
    console.log('🔄 Starting Firebase population with sample data...');
    
    const results = {
      publications: 0,
      projects: 0,
      achievements: 0,
      newsEvents: 0,
      people: 0,
      errors: []
    };

    // Add sample publications
    console.log('📚 Adding sample publications...');
    for (const publication of samplePublications) {
      try {
        await firebaseService.addPublication({
          ...publication,
          id: undefined // Let Firebase generate the ID
        });
        results.publications++;
        console.log(`✅ Added publication: ${publication.title}`);
      } catch (error) {
        console.error(`❌ Error adding publication ${publication.title}:`, error);
        results.errors.push(`Publication: ${publication.title} - ${error.message}`);
      }
    }

    // Add sample projects
    console.log('🏗️ Adding sample projects...');
    for (const project of sampleProjects) {
      try {
        await firebaseService.addProject({
          ...project,
          id: undefined
        });
        results.projects++;
        console.log(`✅ Added project: ${project.title}`);
      } catch (error) {
        console.error(`❌ Error adding project ${project.title}:`, error);
        results.errors.push(`Project: ${project.title} - ${error.message}`);
      }
    }

    // Add sample achievements
    console.log('🏆 Adding sample achievements...');
    for (const achievement of sampleAchievements) {
      try {
        await firebaseService.addAchievement({
          ...achievement,
          id: undefined
        });
        results.achievements++;
        console.log(`✅ Added achievement: ${achievement.title}`);
      } catch (error) {
        console.error(`❌ Error adding achievement ${achievement.title}:`, error);
        results.errors.push(`Achievement: ${achievement.title} - ${error.message}`);
      }
    }

    // Add sample news events
    console.log('📰 Adding sample news events...');
    for (const newsEvent of sampleNewsEvents) {
      try {
        await firebaseService.addNewsEvent({
          ...newsEvent,
          id: undefined
        });
        results.newsEvents++;
        console.log(`✅ Added news event: ${newsEvent.title}`);
      } catch (error) {
        console.error(`❌ Error adding news event ${newsEvent.title}:`, error);
        results.errors.push(`News Event: ${newsEvent.title} - ${error.message}`);
      }
    }

    // Add sample people
    console.log('👥 Adding sample people...');
    
    // Add advisors
    for (const advisor of samplePeople.advisors) {
      try {
        await firebaseService.addPerson({
          ...advisor,
          category: 'advisors'
        });
        results.people++;
        console.log(`✅ Added advisor: ${advisor.name}`);
      } catch (error) {
        console.error(`❌ Error adding advisor ${advisor.name}:`, error);
        results.errors.push(`Advisor: ${advisor.name} - ${error.message}`);
      }
    }

    // Add team members
    for (const member of samplePeople.teamMembers) {
      try {
        await firebaseService.addPerson({
          ...member,
          category: 'teamMembers'
        });
        results.people++;
        console.log(`✅ Added team member: ${member.name}`);
      } catch (error) {
        console.error(`❌ Error adding team member ${member.name}:`, error);
        results.errors.push(`Team Member: ${member.name} - ${error.message}`);
      }
    }

    // Add collaborators
    for (const collaborator of samplePeople.collaborators) {
      try {
        await firebaseService.addPerson({
          ...collaborator,
          category: 'collaborators'
        });
        results.people++;
        console.log(`✅ Added collaborator: ${collaborator.name}`);
      } catch (error) {
        console.error(`❌ Error adding collaborator ${collaborator.name}:`, error);
        results.errors.push(`Collaborator: ${collaborator.name} - ${error.message}`);
      }
    }

    console.log('✅ Firebase population completed!');
    console.log('📊 Results:', results);
    
    return {
      success: true,
      results,
      message: `Successfully added ${results.publications} publications, ${results.projects} projects, ${results.achievements} achievements, ${results.newsEvents} news events, and ${results.people} people.`
    };

  } catch (error) {
    console.error('❌ Firebase population failed:', error);
    return {
      success: false,
      error: error.message,
      message: 'Firebase population failed'
    };
  }
};

// Quick function to check if Firebase is empty
export const checkFirebaseData = async () => {
  try {
    console.log('🔍 Checking Firebase data...');
    
    const [publications, projects, achievements, newsEvents, people] = await Promise.all([
      firebaseService.getPublications(),
      firebaseService.getProjects(),
      firebaseService.getAchievements(),
      firebaseService.getNewsEvents(),
      firebaseService.getPeople()
    ]);

    const counts = {
      publications: publications.length,
      projects: projects.length,
      achievements: achievements.length,
      newsEvents: newsEvents.length,
      people: people.length
    };

    console.log('📊 Firebase data counts:', counts);
    
    const isEmpty = Object.values(counts).every(count => count === 0);
    
    return {
      isEmpty,
      counts,
      total: Object.values(counts).reduce((sum, count) => sum + count, 0)
    };

  } catch (error) {
    console.error('❌ Error checking Firebase data:', error);
    return {
      isEmpty: true,
      error: error.message,
      counts: {}
    };
  }
};

// Auto-populate if Firebase is empty (for development)
export const autoPopulateIfEmpty = async () => {
  try {
    const dataCheck = await checkFirebaseData();
    
    if (dataCheck.isEmpty) {
      console.log('🔄 Firebase appears to be empty, auto-populating with sample data...');
      return await populateFirebaseWithSampleData();
    } else {
      console.log('✅ Firebase already has data, skipping auto-population');
      console.log('📊 Current data:', dataCheck.counts);
      return {
        success: true,
        message: 'Firebase already has data',
        results: dataCheck.counts
      };
    }
  } catch (error) {
    console.error('❌ Auto-populate check failed:', error);
    return {
      success: false,
      error: error.message
    };
  }
};